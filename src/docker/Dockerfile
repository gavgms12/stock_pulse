# ==============================================================================
# STAGE 1: Build Stage
# ==============================================================================
#FROM node:18-alpine AS builder
FROM node:18-slim AS builder

# Instalar dependências do sistema necessárias
# RUN apk update && apk add --no-cache \
#     python3 \
#     py3-pip \
#     make \
#     gcc \
#     g++ \
#     bash \
#     curl \
#     git \
#     libc6-compat \
#     openssl \
#     openssl-dev \
#     libstdc++
RUN apt-get update && apt-get install -y \
    python3 \
#    py3-pip \
    make \
    gcc \
    g++ \
    bash \
    curl \
    git \
#    libc6-compat \
    openssl \
#    openssl-dev \
#    libstdc++ \
    && rm -rf /var/lib/apt/lists/*

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json se existir, senão criar um básico
COPY package*.json* ./

# Criar tsconfig.json básico se não existir
RUN if [ ! -f "tsconfig.json" ]; then \
        echo '{"compilerOptions": {"target": "es2020", "module": "commonjs", "outDir": "./dist", "rootDir": "./src", "strict": true, "esModuleInterop": true, "skipLibCheck": true, "forceConsistentCasingInFileNames": true, "resolveJsonModule": true, "declaration": true, "experimentalDecorators": true, "emitDecoratorMetadata": true}, "include": ["src/**/*"], "exclude": ["node_modules", "dist"]}' > tsconfig.json; \
    fi

# Criar package.json básico se não existir
RUN if [ ! -f "package.json" ]; then \
        echo '{"name": "stock-pulse", "version": "1.0.0", "main": "dist/main.js", "scripts": {"build": "echo Building...", "start": "node dist/main.js"}, "dependencies": {"express": "^4.18.0"}, "devDependencies": {"typescript": "^5.0.0", "@types/node": "^20.0.0"}}' > package.json; \
    fi

# Instalar dependências (ou instalar básicas se não houver package.json)
RUN npm install || npm install express typescript @types/node

# Copiar código fonte
COPY . .

# Verificar se existe schema do Prisma e gerar cliente se necessário
RUN mkdir -p ./src/db/prisma
RUN if [ -f "./src/db/prisma/schema.prisma" ]; then \
        npm install prisma @prisma/client || true; \
        npx prisma generate --schema=./src/db/prisma/schema.prisma || echo "Prisma generate falhou, continuando..."; \
    fi

# Compilar TypeScript se houver arquivos .ts
# RUN if [ -f "tsconfig.json" ] && [ -d "src" ]; then \
#         npx tsc || echo "TypeScript compilation falhou, continuando..."; \
#     else \
#         mkdir -p dist && echo 'console.log("StockPulse iniciado!");' > dist/main.js; \
#     fi
RUN npm run build

# ==============================================================================
# STAGE 2: Production Stage
# ==============================================================================
#FROM node:18-alpine AS production
FROM node:18-slim AS production

# Instalar dependências do sistema para produção
# RUN apk update && apk add --no-cache \
#     bash \
#     curl \
#     dumb-init \
#     postgresql-client \
#     ca-certificates \
#     python3 \
#     py3-pip \
#     make \
#     gcc \
#     g++ \
#     bash \
#     curl \
#     git \
#     libc6-compat \
#     openssl \
#     openssl-dev \
#     libstdc++
RUN apt-get update && apt-get install -y \
    bash \
    curl \
    dumb-init \
    postgresql-client \
    ca-certificates \
    python3 \
#    py3-pip \
    make \
    gcc \
    g++ \
    bash \
    curl \
    git \
#    libc6-compat \
    openssl \
#    openssl-dev \
#    libstdc++ \
    && rm -rf /var/lib/apt/lists/*

# Definir diretório de trabalho
WORKDIR /app

# Copiar dependências da build stage (CORRIGIDO)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/outDir ./dist
COPY --from=builder /app/package*.json ./

# Copiar arquivos de configuração se existirem
#COPY --from=builder /app/src/db/prisma ./src/db/prisma
# Copiar arquivos de configuração se existirem (CORRIGIDO)
RUN mkdir -p ./src/db/prisma
COPY --from=builder /app/src/db/prisma/ ./src/db/prisma/

# Criar scripts de inicialização básicos (CORRIGIDO)
RUN echo '#!/bin/bash' > /usr/local/bin/start.sh && \
    echo 'echo "🚀 Iniciando StockPulse..."' >> /usr/local/bin/start.sh && \
    echo 'echo "Aguardando banco de dados..."' >> /usr/local/bin/start.sh && \
    echo 'while ! pg_isready -h "${POSTGRES_HOST:-db}" -p "${POSTGRES_PORT:-5432}" -U "${POSTGRES_USER:-admin}"; do' >> /usr/local/bin/start.sh && \
    echo '  echo "Aguardando banco..."' >> /usr/local/bin/start.sh && \
    echo '  sleep 2' >> /usr/local/bin/start.sh && \
    echo 'done' >> /usr/local/bin/start.sh && \
    echo 'echo "✅ Banco disponível!"' >> /usr/local/bin/start.sh && \
    echo 'if [ -f "./src/db/prisma/schema.prisma" ]; then' >> /usr/local/bin/start.sh && \
    echo '  echo "🔄 Executando migrations..."' >> /usr/local/bin/start.sh && \
    echo '  npx prisma migrate deploy --schema=./src/db/prisma/schema.prisma || echo "Migrations falharam"' >> /usr/local/bin/start.sh && \
    echo 'fi' >> /usr/local/bin/start.sh && \
    echo 'echo "🎯 Iniciando aplicação..."' >> /usr/local/bin/start.sh && \
    echo 'node dist/main.js' >> /usr/local/bin/start.sh && \
    chmod +x /usr/local/bin/start.sh

RUN echo '#!/bin/bash' > /usr/local/bin/healthcheck.sh && \
    echo 'echo "🔍 Healthcheck do StockPulse..."' >> /usr/local/bin/healthcheck.sh && \
    echo 'if curl -f -s -o /dev/null --max-time 5 "http://localhost:${PORT:-8080}/health"; then' >> /usr/local/bin/healthcheck.sh && \
    echo '  echo "✅ Aplicação saudável"' >> /usr/local/bin/healthcheck.sh && \
    echo '  exit 0' >> /usr/local/bin/healthcheck.sh && \
    echo 'else' >> /usr/local/bin/healthcheck.sh && \
    echo '  echo "❌ Aplicação com problemas"' >> /usr/local/bin/healthcheck.sh && \
    echo '  exit 1' >> /usr/local/bin/healthcheck.sh && \
    echo 'fi' >> /usr/local/bin/healthcheck.sh && \
    chmod +x /usr/local/bin/healthcheck.sh

# Definir variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=8080
ENV SWAGGER_PORT=3000
ENV DEBUG_PORT=5555
ENV FRONTEND_PORT=9877

# Expor portas conforme docker-compose
EXPOSE 3000 5555 8080 9877

# Configurar healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD /usr/local/bin/healthcheck.sh

# Trocar para usuário não-root
#USER stockpulse

# Comando de inicialização
CMD ["dumb-init", "/usr/local/bin/start.sh"]
