# StockPulse - Makefile para Docker Compose

.PHONY: help build up down logs clean restart dev prod admin

# Configurações
COMPOSE_FILE = docker-compose.yaml
COMPOSE_PROD_FILE = docker-compose.prod.yaml

help: ## Mostrar esta mensagem de ajuda
	@echo "StockPulse - Comandos Docker Compose disponíveis:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: ## Construir as imagens
	docker-compose -f $(COMPOSE_FILE) build

up: ## Iniciar os serviços em modo desenvolvimento
	docker-compose -f $(COMPOSE_FILE) up -d

dev: ## Iniciar em modo desenvolvimento com logs
	docker-compose -f $(COMPOSE_FILE) up

prod: ## Iniciar em modo produção
	docker-compose -f $(COMPOSE_PROD_FILE) up -d

admin: ## Iniciar com Adminer para administração do banco
	docker-compose -f $(COMPOSE_FILE) --profile admin up -d

down: ## Parar e remover containers
	docker-compose -f $(COMPOSE_FILE) down

stop: ## Parar containers sem remover
	docker-compose -f $(COMPOSE_FILE) stop

restart: ## Reiniciar serviços
	docker-compose -f $(COMPOSE_FILE) restart

logs: ## Visualizar logs
	docker-compose -f $(COMPOSE_FILE) logs -f

logs-app: ## Visualizar logs apenas da aplicação
	docker-compose -f $(COMPOSE_FILE) logs -f app

logs-db: ## Visualizar logs apenas do banco
	docker-compose -f $(COMPOSE_FILE) logs -f db

clean: ## Limpar containers, volumes e imagens
	docker-compose -f $(COMPOSE_FILE) down -v --remove-orphans
	docker system prune -f

reset: ## Reset completo (limpar tudo e reconstruir)
	make clean
	make build
	make up

shell-app: ## Acessar shell do container da aplicação
	docker-compose -f $(COMPOSE_FILE) exec app sh

shell-db: ## Acessar shell do container do banco
	docker-compose -f $(COMPOSE_FILE) exec db psql -U admin -d stockpulse

seed: ## Executar seed do banco de dados
	docker-compose -f $(COMPOSE_FILE) exec app node dist/db/seed.js

migrate: ## Executar migrations do Prisma
	docker-compose -f $(COMPOSE_FILE) exec app npx prisma migrate deploy --schema=./src/db/prisma/schema.prisma

prisma-studio: ## Abrir Prisma Studio
	docker-compose -f $(COMPOSE_FILE) exec app npx prisma studio --schema=./src/db/prisma/schema.prisma

health: ## Verificar saúde dos serviços
	docker-compose -f $(COMPOSE_FILE) ps
	@echo "\n=== Health Status ==="
	@docker-compose -f $(COMPOSE_FILE) exec app /usr/local/bin/healthcheck.sh || true

backup-db: ## Fazer backup do banco de dados
	@echo "Criando backup do banco de dados..."
	docker-compose -f $(COMPOSE_FILE) exec db pg_dump -U admin stockpulse > backup_$(shell date +%Y%m%d_%H%M%S).sql
	@echo "Backup criado: backup_$(shell date +%Y%m%d_%H%M%S).sql"

restore-db: ## Restaurar backup do banco (uso: make restore-db BACKUP=backup.sql)
	@echo "Restaurando backup $(BACKUP)..."
	docker-compose -f $(COMPOSE_FILE) exec -T db psql -U admin -d stockpulse < $(BACKUP)
	@echo "Backup restaurado!"
