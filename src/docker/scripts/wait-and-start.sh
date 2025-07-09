#!/bin/bash

# StockPulse - Script de Inicialização
# Este script aguarda o banco de dados ficar disponível e executa as migrations

set -e

echo "🚀 Iniciando StockPulse..."

# Função para aguardar o banco de dados
wait_for_db() {
    echo "⏳ Aguardando banco de dados..."
    
    until pg_isready -h "${POSTGRES_HOST:-db}" -p "${POSTGRES_PORT:-5432}" -U "${POSTGRES_USER:-admin}"; do
        echo "📡 Banco de dados não está pronto. Tentando novamente em 5 segundos..."
        sleep 5
    done
    
    echo "✅ Banco de dados está disponível!"
}

# Função para executar migrations
run_migrations() {
    echo "🔄 Executando migrations do Prisma..."
    
    npx prisma migrate deploy --schema=./src/db/prisma/schema.prisma
    
    if [ $? -eq 0 ]; then
        echo "✅ Migrations executadas com sucesso!"
    else
        echo "❌ Erro ao executar migrations!"
        exit 1
    fi
}

# Função para executar seed (opcional)
run_seed() {
    if [ "${RUN_SEED:-false}" = "true" ]; then
        echo "🌱 Executando seed do banco de dados..."
        
        node dist/db/seed.js
        
        if [ $? -eq 0 ]; then
            echo "✅ Seed executado com sucesso!"
        else
            echo "⚠️  Erro ao executar seed (continuando...)"
        fi
    fi
}

# Função para iniciar a aplicação
start_app() {
    echo "🎯 Iniciando aplicação StockPulse..."
    
    # Iniciar diferentes serviços baseado na variável de ambiente
    case "${APP_MODE:-full}" in
        "api")
            echo "🔧 Modo: API apenas"
            node dist/main.js
            ;;
        "frontend")
            echo "🔧 Modo: Frontend apenas"
            npm run start:frontend
            ;;
        "full")
            echo "🔧 Modo: Aplicação completa"
            # Iniciar API em background
            node dist/main.js &
            API_PID=$!
            
            # Iniciar frontend
            npm run start:frontend &
            FRONTEND_PID=$!
            
            # Aguardar ambos os processos
            wait $API_PID $FRONTEND_PID
            ;;
        *)
            echo "❌ Modo de aplicação inválido: ${APP_MODE}"
            exit 1
            ;;
    esac
}

# Função para limpeza ao receber sinal
cleanup() {
    echo "🛑 Recebido sinal de parada..."
    
    if [ ! -z "$API_PID" ]; then
        kill $API_PID 2>/dev/null || true
    fi
    
    if [ ! -z "$FRONTEND_PID" ]; then
        kill $FRONTEND_PID 2>/dev/null || true
    fi
    
    echo "👋 StockPulse finalizado!"
    exit 0
}

# Configurar tratamento de sinais
trap cleanup SIGTERM SIGINT

# Executar sequência de inicialização
main() {
    echo "📋 Configuração:"
    echo "   - Database Host: ${POSTGRES_HOST:-db}"
    echo "   - Database Port: ${POSTGRES_PORT:-5432}"
    echo "   - Database User: ${POSTGRES_USER:-admin}"
    echo "   - Database Name: ${POSTGRES_DB:-stockpulse}"
    echo "   - App Mode: ${APP_MODE:-full}"
    echo "   - Run Seed: ${RUN_SEED:-false}"
    echo ""
    
    wait_for_db
    run_migrations
    run_seed
    start_app
}

# Executar função principal
main "$@"
