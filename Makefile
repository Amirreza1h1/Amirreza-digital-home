COMPOSE ?= docker compose

.DEFAULT_GOAL := help
.PHONY: help build up down build-up restart logs ps

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN{FS=":.*?## "}{printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

build: ## Build the container image
	$(COMPOSE) build

up: ## Start the application in the background
	$(COMPOSE) up -d

down: ## Stop and remove the application containers
	$(COMPOSE) down

build-up: ## Build and start the application
	$(COMPOSE) up -d --build

restart: ## Restart the application
	$(COMPOSE) restart

logs: ## Follow application logs
	$(COMPOSE) logs -f

ps: ## Show container status
	$(COMPOSE) ps
