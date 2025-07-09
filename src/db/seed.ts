import { Usuario } from '../classes/Usuario';
import { Acao } from '../classes/Acao';
import { RendaFixa } from '../classes/RendaFixa';
import { FundoInvestimento } from '../classes/FundoInvestimento';
import { Portfolio } from '../classes/Portfolio';
import { Favorito } from '../classes/Favorito';
import { Notificacao } from '../classes/Notificacao';

import {
    usuarioRepository,
    investimentoRepository,
    portfolioRepository,
    favoritoRepository,
    notificacaoRepository
} from '../repositories';

import { LoggingMiddleware } from '../middlewares/LoggingMiddleware';

const prisma = {
    // Simulação do Prisma para compatibilidade com o padrão
    user: usuarioRepository,
    investment: investimentoRepository,
    portfolio: portfolioRepository,
    favorite: favoritoRepository,
    notification: notificacaoRepository
};

async function main() {
    console.log('Iniciando seed do sistema de investimentos...');

    try {
        LoggingMiddleware.info('Iniciando seed do banco de dados');

        // Limpar dados existentes
        await clearDatabase();
        LoggingMiddleware.info('Banco de dados limpo');

        // Criar usuários
        const adminUser = await createUser({
            id: '1',
            nome: 'Administrador do Sistema',
            email: 'admin@stockpulse.com',
            senha: 'Admin@1234'
        });

        const investorUser = await createUser({
            id: '2',
            nome: 'João Silva',
            email: 'joao.silva@email.com',
            senha: 'Investor@1234'
        });

        const analystUser = await createUser({
            id: '3',
            nome: 'Maria Santos',
            email: 'maria.santos@email.com',
            senha: 'Analyst@1234'
        });

        const premiumUser = await createUser({
            id: '4',
            nome: 'Pedro Oliveira',
            email: 'pedro.oliveira@email.com',
            senha: 'Premium@1234'
        });

        const basicUser = await createUser({
            id: '5',
            nome: 'Ana Costa',
            email: 'ana.costa@email.com',
            senha: 'Basic@1234'
        });

        console.log('✅ Usuários criados com sucesso');

        // Criar ações blue chips
        const petr4 = await createAcao({
            id: 'acao_1',
            nome: 'Petrobras PN',
            codigo: 'PETR4',
            volatilidade: 25.5,
            dividendYield: 8.2,
            historico: generateStockHistory(50, 28.50, 2.5)
        });

        const vale3 = await createAcao({
            id: 'acao_2',
            nome: 'Vale ON',
            codigo: 'VALE3',
            volatilidade: 30.1,
            dividendYield: 12.5,
            historico: generateStockHistory(50, 65.80, 3.2)
        });

        const itub4 = await createAcao({
            id: 'acao_3',
            nome: 'Itaú Unibanco PN',
            codigo: 'ITUB4',
            volatilidade: 20.8,
            dividendYield: 6.8,
            historico: generateStockHistory(50, 23.45, 1.8)
        });

        const abev3 = await createAcao({
            id: 'acao_4',
            nome: 'Ambev ON',
            codigo: 'ABEV3',
            volatilidade: 18.5,
            dividendYield: 4.2,
            historico: generateStockHistory(50, 14.20, 1.5)
        });

        const mglu3 = await createAcao({
            id: 'acao_5',
            nome: 'Magazine Luiza ON',
            codigo: 'MGLU3',
            volatilidade: 45.2,
            dividendYield: 0.5,
            historico: generateStockHistory(50, 8.75, 4.0)
        });

        console.log('✅ Ações criadas com sucesso');

        // Criar investimentos de renda fixa
        const tesouroSelic = await createRendaFixa({
            id: 'rf_1',
            nome: 'Tesouro Selic 2026',
            codigo: 'SELIC26',
            taxaJuros: 10.75,
            dataVencimento: new Date('2026-03-01'),
            historico: generateBondHistory(30, 1000.00, 0.3)
        });

        const cdbInter = await createRendaFixa({
            id: 'rf_2',
            nome: 'CDB Banco Inter 120% CDI',
            codigo: 'CDB120',
            taxaJuros: 12.0,
            dataVencimento: new Date('2025-12-15'),
            historico: generateBondHistory(30, 1050.00, 0.2)
        });

        const lciSantander = await createRendaFixa({
            id: 'rf_3',
            nome: 'LCI Santander 110% CDI',
            codigo: 'LCI110',
            taxaJuros: 11.0,
            dataVencimento: new Date('2025-08-30'),
            historico: generateBondHistory(30, 1025.00, 0.25)
        });

        console.log('✅ Renda fixa criada com sucesso');

        // Criar fundos de investimento
        const xpAllocation = await createFundo({
            id: 'fundo_1',
            nome: 'XP Allocation FIC FIM',
            codigo: 'XPALLOC',
            taxaAdministracao: 1.5,
            patrimonioTotal: 150000000,
            historico: generateFundHistory(40, 125.50, 1.8)
        });

        const bradescofic = await createFundo({
            id: 'fundo_2',
            nome: 'Bradesco FIC de FIM',
            codigo: 'BRADFIC',
            taxaAdministracao: 2.0,
            patrimonioTotal: 85000000,
            historico: generateFundHistory(40, 98.75, 1.2)
        });

        const btgYield = await createFundo({
            id: 'fundo_3',
            nome: 'BTG Pactual Yield FIM',
            codigo: 'BTGYIELD',
            taxaAdministracao: 1.8,
            patrimonioTotal: 220000000,
            historico: generateFundHistory(40, 110.25, 1.5)
        });

        console.log('✅ Fundos de investimento criados com sucesso');

        // Criar portfólios para os usuários
        const conservadorPortfolio = await createPortfolio({
            id: 'portfolio_1',
            nome: 'Portfólio Conservador',
            usuario: adminUser,
            descricao: 'Portfólio focado em renda fixa e baixo risco',
            investimentos: [
                { investimento: tesouroSelic, quantidade: 10, precoCompra: 995.00 },
                { investimento: cdbInter, quantidade: 5, precoCompra: 1048.50 },
                { investimento: itub4, quantidade: 100, precoCompra: 22.80 }
            ]
        });

        const agressivoPortfolio = await createPortfolio({
            id: 'portfolio_2',
            nome: 'Portfólio Agressivo',
            usuario: investorUser,
            descricao: 'Portfólio focado em ações de crescimento',
            investimentos: [
                { investimento: mglu3, quantidade: 500, precoCompra: 10.20 },
                { investimento: petr4, quantidade: 200, precoCompra: 26.80 },
                { investimento: vale3, quantidade: 150, precoCompra: 62.40 }
            ]
        });

        const balanceadoPortfolio = await createPortfolio({
            id: 'portfolio_3',
            nome: 'Portfólio Balanceado',
            usuario: analystUser,
            descricao: 'Mix equilibrado entre renda fixa e variável',
            investimentos: [
                { investimento: itub4, quantidade: 200, precoCompra: 23.10 },
                { investimento: abev3, quantidade: 300, precoCompra: 13.85 },
                { investimento: lciSantander, quantidade: 8, precoCompra: 1022.00 },
                { investimento: xpAllocation, quantidade: 50, precoCompra: 124.20 }
            ]
        });

        const dividendosPortfolio = await createPortfolio({
            id: 'portfolio_4',
            nome: 'Portfólio de Dividendos',
            usuario: premiumUser,
            descricao: 'Foco em ativos com bom yield de dividendos',
            investimentos: [
                { investimento: vale3, quantidade: 100, precoCompra: 64.50 },
                { investimento: petr4, quantidade: 150, precoCompra: 27.80 },
                { investimento: itub4, quantidade: 250, precoCompra: 23.50 }
            ]
        });

        console.log('✅ Portfólios criados com sucesso');

        // Criar favoritos para os usuários
        await createManyFavoritos([
            { usuario: adminUser, investimento: tesouroSelic },
            { usuario: adminUser, investimento: itub4 },
            { usuario: investorUser, investimento: mglu3 },
            { usuario: investorUser, investimento: petr4 },
            { usuario: investorUser, investimento: vale3 },
            { usuario: analystUser, investimento: xpAllocation },
            { usuario: analystUser, investimento: abev3 },
            { usuario: premiumUser, investimento: vale3 },
            { usuario: premiumUser, investimento: petr4 },
            { usuario: basicUser, investimento: tesouroSelic }
        ]);

        console.log('✅ Favoritos criados com sucesso');

        // Criar notificações do sistema
        await createManyNotificacoes([
            {
                message: 'Bem-vindo ao StockPulse! Sua conta foi criada com sucesso.',
                usuario: adminUser
            },
            {
                message: 'PETR4 subiu 3.2% hoje! Confira seu portfólio.',
                usuario: investorUser
            },
            {
                message: 'Dividendos de VALE3 serão pagos em 5 dias úteis.',
                usuario: analystUser
            },
            {
                message: 'Recomendamos rebalancear seu portfólio conservador.',
                usuario: adminUser
            },
            {
                message: 'Novo relatório de análise técnica disponível.',
                usuario: premiumUser
            },
            {
                message: 'Seu CDB vence em 30 dias. Considere renovar.',
                usuario: basicUser
            },
            {
                message: 'Taxa Selic foi alterada - impacto em seus investimentos.',
                usuario: analystUser
            },
            {
                message: 'MGLU3 apresentou volatilidade acima do normal hoje.',
                usuario: investorUser
            }
        ]);

        console.log('✅ Notificações criadas com sucesso');

        // Gerar relatório final
        await generateSeedReport();

        console.log('\n🎉 Seed concluído com sucesso!');

    } catch (error) {
        console.error('❌ Erro durante o seed:', error);
        LoggingMiddleware.error('Erro durante o seed do banco de dados', undefined, undefined, error instanceof Error ? error.message : String(error));
        throw error;
    }
}

async function clearDatabase() {
    await usuarioRepository.clear();
    await investimentoRepository.clear();
    await portfolioRepository.clear();
    await favoritoRepository.clear();
    await notificacaoRepository.clear();
}

async function createUser(userData: {
    id: string;
    nome: string;
    email: string;
    senha: string;
}): Promise<Usuario> {
    const usuario = new Usuario(
        userData.id,
        userData.nome,
        userData.email,
        userData.senha
    );
    

    await usuarioRepository.create(usuario);
    return usuario;
}

async function createAcao(acaoData: {
    id: string;
    nome: string;
    codigo: string;
    volatilidade: number;
    dividendYield: number;
    historico: number[];
}): Promise<Acao> {
    const acao = new Acao(
        acaoData.id,
        acaoData.nome,
        acaoData.codigo,
        acaoData.historico,
        acaoData.volatilidade,
        acaoData.dividendYield
    );

    await investimentoRepository.create(acao);
    return acao;
}

async function createRendaFixa(rfData: {
    id: string;
    nome: string;
    codigo: string;
    taxaJuros: number;
    dataVencimento: Date;
    historico: number[];
}): Promise<RendaFixa> {
    const rendaFixa = new RendaFixa(
        rfData.id,
        rfData.nome,
        rfData.codigo,
        rfData.historico,
        rfData.taxaJuros,
        rfData.dataVencimento
    );

    await investimentoRepository.create(rendaFixa);
    return rendaFixa;
}

async function createFundo(fundoData: {
    id: string;
    nome: string;
    codigo: string;
    taxaAdministracao: number;
    patrimonioTotal: number;
    historico: number[];
}): Promise<FundoInvestimento> {
    const fundo = new FundoInvestimento(
        fundoData.id,
        fundoData.nome,
        fundoData.codigo,
        fundoData.historico,
        fundoData.taxaAdministracao,
        fundoData.patrimonioTotal
    );

    await investimentoRepository.create(fundo);
    return fundo;
}

async function createPortfolio(portfolioData: {
    id: string;
    nome: string;
    usuario: Usuario;
    descricao: string;
    investimentos: Array<{
        investimento: any;
        quantidade: number;
        precoCompra: number;
    }>;
}): Promise<Portfolio> {
    const portfolio = new Portfolio(
        portfolioData.id,
        portfolioData.nome,
        portfolioData.usuario,
        portfolioData.descricao
    );

    // Adicionar investimentos ao portfólio
    for (const item of portfolioData.investimentos) {
        portfolio.adicionarInvestimento(
            item.investimento,
            item.quantidade,
            item.precoCompra
        );
    }

    await portfolioRepository.create(portfolio);
    return portfolio;
}

async function createManyFavoritos(favoritosData: Array<{
    usuario: Usuario;
    investimento: any;
}>): Promise<void> {
    for (const favData of favoritosData) {
        const dataAdicao = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000);
        const favorito = new Favorito(favData.usuario, favData.investimento, dataAdicao);
        await favoritoRepository.create(favorito);
    }
}

async function createManyNotificacoes(notificacoesData: Array<{
    message: string;
    usuario: Usuario;
}>): Promise<void> {
    for (let i = 0; i < notificacoesData.length; i++) {
        const notifData = notificacoesData[i];
        const dataEnvio = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);
        const lida = Math.random() > 0.4; // 60% de chance de estar lida
        
        const notificacao = new Notificacao(
            `notif_${notifData.usuario.id}_${i + 1}`,
            notifData.usuario,
            notifData.message,
            dataEnvio,
            lida
        );
        
        await notificacaoRepository.create(notificacao);
    }
}

function generateStockHistory(days: number, startPrice: number, volatility: number): number[] {
    const history: number[] = [];
    let currentPrice = startPrice;

    for (let i = 0; i < days; i++) {
        // Movimento browniano com ligeira tendência de alta para ações
        const randomChange = (Math.random() - 0.47) * volatility;
        currentPrice = Math.max(currentPrice + randomChange, startPrice * 0.3);
        history.push(Number(currentPrice.toFixed(2)));
    }

    return history;
}

function generateBondHistory(days: number, startPrice: number, volatility: number): number[] {
    const history: number[] = [];
    let currentPrice = startPrice;

    for (let i = 0; i < days; i++) {
        // Renda fixa tem baixa volatilidade e tendência de alta gradual
        const randomChange = (Math.random() - 0.45) * volatility;
        currentPrice = Math.max(currentPrice + randomChange, startPrice * 0.95);
        history.push(Number(currentPrice.toFixed(2)));
    }

    return history;
}

function generateFundHistory(days: number, startPrice: number, volatility: number): number[] {
    const history: number[] = [];
    let currentPrice = startPrice;

    for (let i = 0; i < days; i++) {
        // Fundos têm volatilidade moderada
        const randomChange = (Math.random() - 0.46) * volatility;
        currentPrice = Math.max(currentPrice + randomChange, startPrice * 0.8);
        history.push(Number(currentPrice.toFixed(2)));
    }

    return history;
}

async function generateSeedReport(): Promise<void> {
    const usuarios = await usuarioRepository.findAll();
    const investimentos = await investimentoRepository.findAll();
    const portfolios = await portfolioRepository.findAll();
    const favoritos = await favoritoRepository.findAll();
    const notificacoes = await notificacaoRepository.findAll();

    console.log('\n📊 === RELATÓRIO DO SEED ===\n');
    
    console.log(`👥 Usuários criados: ${usuarios.length}`);
    console.log(`💰 Investimentos criados: ${investimentos.length}`);
    console.log(`📈 Portfólios criados: ${portfolios.length}`);
    console.log(`⭐ Favoritos criados: ${favoritos.length}`);
    console.log(`🔔 Notificações criadas: ${notificacoes.length}`);
    
    console.log('\n--- Breakdown dos Investimentos ---');
    const porTipo = investimentos.reduce((acc, inv) => {
        const tipo = inv.tipo || (inv.constructor?.name) || 'Desconhecido';
        acc[tipo] = (acc[tipo] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
    
    Object.entries(porTipo).forEach(([tipo, count]) => {
        console.log(`${tipo}: ${count} investimentos`);
    });

    console.log('\n--- Estatísticas dos Portfólios ---');
    
    if (portfolios.length > 0) {
        const portfolioStats = portfolios.reduce((acc, portfolio) => {
            const valor = portfolio.getValorTotal ? portfolio.getValorTotal() : 0;
            const numInv = portfolio.getInvestimentos ? portfolio.getInvestimentos().length : 0;
            
            acc.valorTotal += valor;
            acc.totalInvestimentos += numInv;
            acc.count++;
            
            return acc;
        }, { valorTotal: 0, totalInvestimentos: 0, count: 0 });

        console.log(`Valor total em portfólios: R$ ${portfolioStats.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
        console.log(`Valor médio por portfólio: R$ ${(portfolioStats.valorTotal / portfolioStats.count).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
        console.log(`Média de investimentos por portfólio: ${(portfolioStats.totalInvestimentos / portfolioStats.count).toFixed(1)}`);
    } else {
        console.log('Nenhum portfólio encontrado');
    }

    console.log('\n--- Status das Notificações ---');
    const naoLidas = notificacoes.filter(n => !n.lida).length;
    console.log(`📨 Não lidas: ${naoLidas}`);
    console.log(`✅ Lidas: ${notificacoes.length - naoLidas}`);

    console.log('\n🏁 === FIM DO RELATÓRIO ===\n');
}

// Executar o seed
main()
    .then(() => {
        console.log('🎯 Processo de seed finalizado!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('💥 Falha no seed:', error);
        process.exit(1);
    });

export { main as runSeed };
