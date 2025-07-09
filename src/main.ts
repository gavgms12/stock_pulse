import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from 'dotenv';

// Carregar variáveis de ambiente
config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas básicas
app.get('/', (req, res) => {
    res.json({
        message: 'StockPulse API',
        version: '1.0.0',
        status: 'running',
        timestamp: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Rota de informações da API
app.get('/api/info', (req, res) => {
    res.json({
        name: 'StockPulse',
        description: 'Sistema de análise e acompanhamento de investimentos',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            info: '/api/info',
            docs: '/api-docs'
        }
    });
});

// Middleware de tratamento de erros
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Erro na aplicação:', err);
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Algo deu errado'
    });
});

/*
// Middleware para rotas não encontradas
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Rota não encontrada',
        path: req.originalUrl
    });
});
*/

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 StockPulse rodando na porta ${PORT}`);
    console.log(`🔍 Health check: http://localhost:${PORT}/health`);
    console.log(`📖 API Info: http://localhost:${PORT}/api/info`);
    console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
