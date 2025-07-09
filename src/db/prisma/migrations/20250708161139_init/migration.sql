-- CreateEnum
CREATE TYPE "TipoInvestimento" AS ENUM ('ACAO', 'RENDA_FIXA', 'FUNDO_INVESTIMENTO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimoLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investimento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "tipo" "TipoInvestimento" NOT NULL,
    "historico" DOUBLE PRECISION[],
    "volatilidade" DOUBLE PRECISION,
    "dividendYield" DOUBLE PRECISION,
    "taxaJuros" DOUBLE PRECISION,
    "dataVencimento" TIMESTAMP(3),
    "taxaAdministracao" DOUBLE PRECISION,
    "patrimonioTotal" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Investimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "usuarioId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" TEXT NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "investimentoId" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "precoCompra" DOUBLE PRECISION NOT NULL,
    "dataCompra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorito" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "investimentoId" TEXT NOT NULL,
    "dataAdicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacao" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL DEFAULT false,
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemLog" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "operation" TEXT,
    "executionTime" DOUBLE PRECISION,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SystemLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketData" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "variacao" DOUBLE PRECISION NOT NULL,
    "volume" BIGINT NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MarketData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transacao" (
    "id" TEXT NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "investimentoId" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "taxas" DOUBLE PRECISION DEFAULT 0,
    "dataTransacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacoes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlertaPreco" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "investimentoId" TEXT NOT NULL,
    "precoAlvo" DOUBLE PRECISION NOT NULL,
    "condicao" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "dataDisparo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AlertaPreco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RelatorioPerformance" (
    "id" TEXT NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "valorInicial" DOUBLE PRECISION NOT NULL,
    "valorFinal" DOUBLE PRECISION NOT NULL,
    "rentabilidade" DOUBLE PRECISION NOT NULL,
    "benchmark" DOUBLE PRECISION,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RelatorioPerformance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "Usuario_email_idx" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "Usuario_nome_idx" ON "Usuario"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Investimento_codigo_key" ON "Investimento"("codigo");

-- CreateIndex
CREATE INDEX "Investimento_codigo_idx" ON "Investimento"("codigo");

-- CreateIndex
CREATE INDEX "Investimento_tipo_idx" ON "Investimento"("tipo");

-- CreateIndex
CREATE INDEX "Investimento_nome_idx" ON "Investimento"("nome");

-- CreateIndex
CREATE INDEX "Portfolio_usuarioId_idx" ON "Portfolio"("usuarioId");

-- CreateIndex
CREATE INDEX "Portfolio_nome_idx" ON "Portfolio"("nome");

-- CreateIndex
CREATE INDEX "PortfolioItem_portfolioId_idx" ON "PortfolioItem"("portfolioId");

-- CreateIndex
CREATE INDEX "PortfolioItem_investimentoId_idx" ON "PortfolioItem"("investimentoId");

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioItem_portfolioId_investimentoId_key" ON "PortfolioItem"("portfolioId", "investimentoId");

-- CreateIndex
CREATE INDEX "Favorito_usuarioId_idx" ON "Favorito"("usuarioId");

-- CreateIndex
CREATE INDEX "Favorito_investimentoId_idx" ON "Favorito"("investimentoId");

-- CreateIndex
CREATE UNIQUE INDEX "Favorito_usuarioId_investimentoId_key" ON "Favorito"("usuarioId", "investimentoId");

-- CreateIndex
CREATE INDEX "Notificacao_usuarioId_idx" ON "Notificacao"("usuarioId");

-- CreateIndex
CREATE INDEX "Notificacao_lida_idx" ON "Notificacao"("lida");

-- CreateIndex
CREATE INDEX "Notificacao_dataEnvio_idx" ON "Notificacao"("dataEnvio");

-- CreateIndex
CREATE INDEX "SystemLog_type_source_idx" ON "SystemLog"("type", "source");

-- CreateIndex
CREATE INDEX "SystemLog_createdAt_idx" ON "SystemLog"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "MarketData_codigo_key" ON "MarketData"("codigo");

-- CreateIndex
CREATE INDEX "MarketData_codigo_idx" ON "MarketData"("codigo");

-- CreateIndex
CREATE INDEX "MarketData_dataHora_idx" ON "MarketData"("dataHora");

-- CreateIndex
CREATE INDEX "Transacao_portfolioId_idx" ON "Transacao"("portfolioId");

-- CreateIndex
CREATE INDEX "Transacao_investimentoId_idx" ON "Transacao"("investimentoId");

-- CreateIndex
CREATE INDEX "Transacao_tipo_idx" ON "Transacao"("tipo");

-- CreateIndex
CREATE INDEX "Transacao_dataTransacao_idx" ON "Transacao"("dataTransacao");

-- CreateIndex
CREATE INDEX "AlertaPreco_usuarioId_idx" ON "AlertaPreco"("usuarioId");

-- CreateIndex
CREATE INDEX "AlertaPreco_investimentoId_idx" ON "AlertaPreco"("investimentoId");

-- CreateIndex
CREATE INDEX "AlertaPreco_ativo_idx" ON "AlertaPreco"("ativo");

-- CreateIndex
CREATE INDEX "RelatorioPerformance_portfolioId_idx" ON "RelatorioPerformance"("portfolioId");

-- CreateIndex
CREATE INDEX "RelatorioPerformance_periodo_idx" ON "RelatorioPerformance"("periodo");

-- CreateIndex
CREATE INDEX "RelatorioPerformance_dataInicio_dataFim_idx" ON "RelatorioPerformance"("dataInicio", "dataFim");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PortfolioItem" ADD CONSTRAINT "PortfolioItem_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PortfolioItem" ADD CONSTRAINT "PortfolioItem_investimentoId_fkey" FOREIGN KEY ("investimentoId") REFERENCES "Investimento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_investimentoId_fkey" FOREIGN KEY ("investimentoId") REFERENCES "Investimento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
