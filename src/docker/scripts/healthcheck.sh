#!/bin/bash

# StockPulse - Script de Healthcheck
# Verifica se a aplicação está respondendo corretamente

set -e

# Configurações
API_HOST="${API_HOST:-localhost}"
API_PORT="${PORT:-8080}"
SWAGGER_PORT="${SWAGGER_PORT:-3000}"
FRONTEND_PORT="${FRONTEND_PORT:-9877}"

# Função para testar endpoint
test_endpoint() {
    local url="$1"
    local service="$2"
    
    if curl -f -s -o /dev/null --max-time 10 "$url"; then
        echo "✅ $service está respondendo"
        return 0
    else
        echo "❌ $service não está respondendo"
        return 1
    fi
}

# Função principal de healthcheck
main() {
    echo "🔍 Executando healthcheck do StockPulse..."
    
    local health_status=0
    
    # Testar API principal
    if ! test_endpoint "http://${API_HOST}:${API_PORT}/health" "API Principal"; then
        health_status=1
    fi
    
    # Testar Swagger (se habilitado)
    if [ "${SWAGGER_ENABLED:-true}" = "true" ]; then
        if ! test_endpoint "http://${API_HOST}:${SWAGGER_PORT}/api-docs" "Swagger UI"; then
            health_status=1
        fi
    fi
    
    # Testar Frontend (se habilitado)
    if [ "${FRONTEND_ENABLED:-true}" = "true" ]; then
        if ! test_endpoint "http://${API_HOST}:${FRONTEND_PORT}" "Frontend"; then
            health_status=1
        fi
    fi
    
    # Verificar conexão com banco de dados
    if ! pg_isready -h "${POSTGRES_HOST:-db}" -p "${POSTGRES_PORT:-5432}" -U "${POSTGRES_USER:-admin}" >/dev/null 2>&1; then
        echo "❌ Banco de dados não está acessível"
        health_status=1
    else
        echo "✅ Banco de dados está acessível"
    fi
    
    # Resultado final
    if [ $health_status -eq 0 ]; then
        echo "🎉 Healthcheck passou - StockPulse está saudável!"
        exit 0
    else
        echo "💥 Healthcheck falhou - StockPulse tem problemas!"
        exit 1
    fi
}

# Executar healthcheck
main "$@"
