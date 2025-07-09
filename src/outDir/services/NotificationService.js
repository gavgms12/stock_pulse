"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const BaseService_1 = require("./BaseService");
const NotificacaoController_1 = require("../controllers/NotificacaoController");
const UsuarioController_1 = require("../controllers/UsuarioController");
class NotificationService extends BaseService_1.BaseService {
    static async sendNotification(userId, message, template, variables) {
        return this.logOperation('sendNotification', async () => {
            const usuarioResult = this.usuarioController.obterUsuario(userId);
            if (!usuarioResult.success) {
                return this.error('Usuário não encontrado');
            }
            let finalMessage = message;
            if (template && variables) {
                finalMessage = this.processTemplate(template, variables);
            }
            const result = this.notificacaoController.criarNotificacao({
                usuario: usuarioResult.data,
                mensagem: finalMessage
            });
            if (!result.success) {
                return this.error(result.error || 'Erro ao criar notificação');
            }
            return this.success(undefined, 'Notificação enviada com sucesso');
        }, userId);
    }
    static async sendBulkNotifications(userIds, message, template, variables) {
        return this.logOperation('sendBulkNotifications', async () => {
            let sent = 0;
            let failed = 0;
            for (const userId of userIds) {
                const result = await this.sendNotification(userId, message, template, variables);
                if (result.success) {
                    sent++;
                }
                else {
                    failed++;
                }
            }
            return this.success({ sent, failed });
        });
    }
    static async sendPriceChangeAlert(userId, investimento, oldPrice, newPrice) {
        const changePercent = ((newPrice - oldPrice) / oldPrice) * 100;
        const direction = changePercent > 0 ? 'subiu' : 'caiu';
        const changeText = Math.abs(changePercent).toFixed(2);
        const message = `💰 ${investimento.nome} (${investimento.codigo}) ${direction} ${changeText}% - De ${this.formatCurrency(oldPrice)} para ${this.formatCurrency(newPrice)}`;
        return this.sendNotification(userId, message);
    }
    static async sendPortfolioAlert(userId, portfolio, alertType) {
        let message = '';
        switch (alertType) {
            case 'PERFORMANCE':
                const performance = portfolio.calcularRentabilidade();
                message = `📊 Seu portfólio "${portfolio.nome}" está com rentabilidade de ${this.formatPercentage(performance)}`;
                break;
            case 'REBALANCE':
                message = `⚖️ Considere rebalancear seu portfólio "${portfolio.nome}" para manter a diversificação`;
                break;
            case 'RISK':
                message = `⚠️ Seu portfólio "${portfolio.nome}" pode estar com risco elevado. Revise seus investimentos`;
                break;
        }
        return this.sendNotification(userId, message);
    }
    static async sendDividendAlert(userId, investimento, dividendValue, exDate) {
        const message = `💸 Dividendo disponível! ${investimento.nome} (${investimento.codigo}) - Valor: ${this.formatCurrency(dividendValue)} - Data ex: ${exDate.toLocaleDateString('pt-BR')}`;
        return this.sendNotification(userId, message);
    }
    static async sendExpirationAlert(userId, investimento, daysUntilExpiration) {
        const message = `⏰ Atenção! ${investimento.nome} (${investimento.codigo}) vence em ${daysUntilExpiration} dias`;
        return this.sendNotification(userId, message);
    }
    // Gerenciamento de templates
    static createTemplate(template) {
        const newTemplate = {
            id: Date.now().toString(),
            ...template
        };
        this.templates.push(newTemplate);
        return this.success(newTemplate);
    }
    static getTemplates() {
        return this.success(this.templates);
    }
    static processTemplate(template, variables) {
        let processed = template;
        for (const [key, value] of Object.entries(variables)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            processed = processed.replace(regex, String(value));
        }
        return processed;
    }
    // Gerenciamento de regras
    static createNotificationRule(rule) {
        const newRule = {
            id: Date.now().toString(),
            createdAt: new Date(),
            ...rule
        };
        this.rules.push(newRule);
        return this.success(newRule);
    }
    static getUserRules(userId) {
        const userRules = this.rules.filter(rule => rule.userId === userId);
        return this.success(userRules);
    }
    static toggleRule(ruleId, enabled) {
        const rule = this.rules.find(r => r.id === ruleId);
        if (!rule) {
            return this.error('Regra não encontrada');
        }
        rule.enabled = enabled;
        return this.success(rule);
    }
    static deleteRule(ruleId) {
        const index = this.rules.findIndex(r => r.id === ruleId);
        if (index === -1) {
            return this.error('Regra não encontrada');
        }
        this.rules.splice(index, 1);
        return this.success(undefined);
    }
    // Processamento automático de regras
    static async processRules() {
        return this.logOperation('processRules', async () => {
            const activeRules = this.rules.filter(rule => rule.enabled);
            let processed = 0;
            let triggered = 0;
            for (const rule of activeRules) {
                processed++;
                try {
                    const shouldTrigger = await this.evaluateRule(rule);
                    if (shouldTrigger) {
                        await this.triggerRule(rule);
                        triggered++;
                    }
                }
                catch (error) {
                    console.error('Erro ao processar regra:', rule.id, error);
                }
            }
            return this.success({ processed, triggered });
        });
    }
    static async evaluateRule(rule) {
        // Implementar lógica de avaliação baseada no tipo e condições
        switch (rule.type) {
            case 'PRICE_CHANGE':
                return this.evaluatePriceChangeRule(rule);
            case 'PORTFOLIO_ALERT':
                return this.evaluatePortfolioRule(rule);
            case 'DIVIDEND':
                return this.evaluateDividendRule(rule);
            case 'EXPIRATION':
                return this.evaluateExpirationRule(rule);
            default:
                return false;
        }
    }
    static evaluatePriceChangeRule(rule) {
        // Implementar lógica específica para mudança de preço
        const { threshold, investmentId } = rule.conditions;
        // Aqui você verificaria se o preço mudou mais que o threshold
        return Math.random() > 0.8; // Simulação
    }
    static evaluatePortfolioRule(rule) {
        // Implementar lógica específica para portfólio
        return Math.random() > 0.9; // Simulação
    }
    static evaluateDividendRule(rule) {
        // Implementar lógica específica para dividendos
        return Math.random() > 0.95; // Simulação
    }
    static evaluateExpirationRule(rule) {
        // Implementar lógica específica para vencimento
        return Math.random() > 0.85; // Simulação
    }
    static async triggerRule(rule) {
        // Implementar disparo da notificação baseada na regra
        await this.sendNotification(rule.userId, `Regra ativada: ${rule.type}`, undefined, rule.conditions);
    }
}
exports.NotificationService = NotificationService;
NotificationService.notificacaoController = new NotificacaoController_1.NotificacaoController();
NotificationService.usuarioController = new UsuarioController_1.UsuarioController();
NotificationService.templates = [];
NotificationService.rules = [];
