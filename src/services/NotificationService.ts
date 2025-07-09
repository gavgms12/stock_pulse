import { BaseService, ServiceResult } from './BaseService';
import { NotificacaoController } from '../controllers/NotificacaoController';
import { UsuarioController } from '../controllers/UsuarioController';
import { Portfolio } from '../classes/Portfolio';
import { Investimento } from '../classes/Investimento';
import { Usuario } from '../classes/Usuario';

export interface NotificationTemplate {
    id: string;
    name: string;
    template: string;
    variables: string[];
}

export interface NotificationRule {
    id: string;
    userId: string;
    type: 'PRICE_CHANGE' | 'PORTFOLIO_ALERT' | 'DIVIDEND' | 'EXPIRATION';
    conditions: Record<string, any>;
    enabled: boolean;
    createdAt: Date;
}

export class NotificationService extends BaseService {
    private static notificacaoController = new NotificacaoController();
    private static usuarioController = new UsuarioController();
    private static templates: NotificationTemplate[] = [];
    private static rules: NotificationRule[] = [];

    static async sendNotification(
        userId: string,
        message: string,
        template?: string,
        variables?: Record<string, any>
    ): Promise<ServiceResult<void>> {
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

    static async sendBulkNotifications(
        userIds: string[],
        message: string,
        template?: string,
        variables?: Record<string, any>
    ): Promise<ServiceResult<{ sent: number; failed: number }>> {
        return this.logOperation('sendBulkNotifications', async () => {
            let sent = 0;
            let failed = 0;

            for (const userId of userIds) {
                const result = await this.sendNotification(userId, message, template, variables);
                if (result.success) {
                    sent++;
                } else {
                    failed++;
                }
            }

            return this.success({ sent, failed });
        });
    }

    static async sendPriceChangeAlert(
        userId: string,
        investimento: Investimento,
        oldPrice: number,
        newPrice: number
    ): Promise<ServiceResult<void>> {
        const changePercent = ((newPrice - oldPrice) / oldPrice) * 100;
        const direction = changePercent > 0 ? 'subiu' : 'caiu';
        const changeText = Math.abs(changePercent).toFixed(2);

        const message = `💰 ${investimento.nome} (${investimento.codigo}) ${direction} ${changeText}% - De ${this.formatCurrency(oldPrice)} para ${this.formatCurrency(newPrice)}`;

        return this.sendNotification(userId, message);
    }

    static async sendPortfolioAlert(
        userId: string,
        portfolio: Portfolio,
        alertType: 'PERFORMANCE' | 'REBALANCE' | 'RISK'
    ): Promise<ServiceResult<void>> {
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

    static async sendDividendAlert(
        userId: string,
        investimento: Investimento,
        dividendValue: number,
        exDate: Date
    ): Promise<ServiceResult<void>> {
        const message = `💸 Dividendo disponível! ${investimento.nome} (${investimento.codigo}) - Valor: ${this.formatCurrency(dividendValue)} - Data ex: ${exDate.toLocaleDateString('pt-BR')}`;

        return this.sendNotification(userId, message);
    }

    static async sendExpirationAlert(
        userId: string,
        investimento: Investimento,
        daysUntilExpiration: number
    ): Promise<ServiceResult<void>> {
        const message = `⏰ Atenção! ${investimento.nome} (${investimento.codigo}) vence em ${daysUntilExpiration} dias`;

        return this.sendNotification(userId, message);
    }

    // Gerenciamento de templates
    static createTemplate(template: Omit<NotificationTemplate, 'id'>): ServiceResult<NotificationTemplate> {
        const newTemplate: NotificationTemplate = {
            id: Date.now().toString(),
            ...template
        };

        this.templates.push(newTemplate);
        return this.success(newTemplate);
    }

    static getTemplates(): ServiceResult<NotificationTemplate[]> {
        return this.success(this.templates);
    }

    static processTemplate(template: string, variables: Record<string, any>): string {
        let processed = template;
        
        for (const [key, value] of Object.entries(variables)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            processed = processed.replace(regex, String(value));
        }
        
        return processed;
    }

    // Gerenciamento de regras
    static createNotificationRule(rule: Omit<NotificationRule, 'id' | 'createdAt'>): ServiceResult<NotificationRule> {
        const newRule: NotificationRule = {
            id: Date.now().toString(),
            createdAt: new Date(),
            ...rule
        };

        this.rules.push(newRule);
        return this.success(newRule);
    }

    static getUserRules(userId: string): ServiceResult<NotificationRule[]> {
        const userRules = this.rules.filter(rule => rule.userId === userId);
        return this.success(userRules);
    }

    static toggleRule(ruleId: string, enabled: boolean): ServiceResult<NotificationRule> {
        const rule = this.rules.find(r => r.id === ruleId);
        if (!rule) {
            return this.error('Regra não encontrada');
        }

        rule.enabled = enabled;
        return this.success(rule);
    }

    static deleteRule(ruleId: string): ServiceResult<void> {
        const index = this.rules.findIndex(r => r.id === ruleId);
        if (index === -1) {
            return this.error('Regra não encontrada');
        }

        this.rules.splice(index, 1);
        return this.success(undefined);
    }

    // Processamento automático de regras
    static async processRules(): Promise<ServiceResult<{ processed: number; triggered: number }>> {
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
                } catch (error) {
                    console.error('Erro ao processar regra:', rule.id, error);
                }
            }

            return this.success({ processed, triggered });
        });
    }

    private static async evaluateRule(rule: NotificationRule): Promise<boolean> {
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

    private static evaluatePriceChangeRule(rule: NotificationRule): boolean {
        // Implementar lógica específica para mudança de preço
        const { threshold, investmentId } = rule.conditions;
        // Aqui você verificaria se o preço mudou mais que o threshold
        return Math.random() > 0.8; // Simulação
    }

    private static evaluatePortfolioRule(rule: NotificationRule): boolean {
        // Implementar lógica específica para portfólio
        return Math.random() > 0.9; // Simulação
    }

    private static evaluateDividendRule(rule: NotificationRule): boolean {
        // Implementar lógica específica para dividendos
        return Math.random() > 0.95; // Simulação
    }

    private static evaluateExpirationRule(rule: NotificationRule): boolean {
        // Implementar lógica específica para vencimento
        return Math.random() > 0.85; // Simulação
    }

    private static async triggerRule(rule: NotificationRule): Promise<void> {
        // Implementar disparo da notificação baseada na regra
        await this.sendNotification(
            rule.userId,
            `Regra ativada: ${rule.type}`,
            undefined,
            rule.conditions
        );
    }
}
