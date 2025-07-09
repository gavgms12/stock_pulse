"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
// Carregar variáveis de ambiente
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
// Middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
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
app.use((err, req, res, next) => {
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
exports.default = app;
