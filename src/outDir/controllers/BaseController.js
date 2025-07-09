"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    handleError(error) {
        console.error('Erro no controller:', error);
        return {
            success: false,
            error: error.message || 'Erro interno do servidor'
        };
    }
    validateRequired(data, fields) {
        const errors = [];
        for (const field of fields) {
            if (!data[field]) {
                errors.push(`Campo '${field}' é obrigatório`);
            }
        }
        return errors;
    }
    success(data, message) {
        return {
            success: true,
            data,
            message
        };
    }
    error(message) {
        return {
            success: false,
            error: message
        };
    }
}
exports.BaseController = BaseController;
