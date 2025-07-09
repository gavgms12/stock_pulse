"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const LoggingMiddleware_1 = require("../middlewares/LoggingMiddleware");
class BaseService {
    static async executeWithRetry(operation, maxRetries = 3, delayMs = 1000) {
        let lastError = null;
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await operation();
            }
            catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                if (attempt === maxRetries) {
                    throw lastError;
                }
                LoggingMiddleware_1.LoggingMiddleware.warn(`Tentativa ${attempt} falhou, tentando novamente em ${delayMs}ms`, undefined, { error: lastError.message });
                await this.delay(delayMs);
                delayMs *= 2; // Backoff exponencial
            }
        }
        throw lastError;
    }
    static async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    static success(data, message) {
        return {
            success: true,
            data,
            message
        };
    }
    static error(error) {
        return {
            success: false,
            error
        };
    }
    static async logOperation(operationName, operation, userId) {
        return LoggingMiddleware_1.LoggingMiddleware.measureExecutionTime(`SERVICE: ${operationName}`, userId, operation);
    }
    static validateRequired(data, fields) {
        const errors = [];
        for (const field of fields) {
            if (!data[field]) {
                errors.push(`Campo '${field}' é obrigatório`);
            }
        }
        return errors;
    }
    static isValidUrl(url) {
        try {
            new URL(url);
            return true;
        }
        catch {
            return false;
        }
    }
    static formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
    static formatPercentage(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2
        }).format(value / 100);
    }
}
exports.BaseService = BaseService;
