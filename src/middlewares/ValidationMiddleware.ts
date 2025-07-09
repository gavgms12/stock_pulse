export interface ValidationRule {
    required?: boolean;
    type?: 'string' | 'number' | 'boolean' | 'email' | 'date';
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: RegExp;
    custom?: (value: any) => boolean | string;
}

export interface ValidationSchema {
    [key: string]: ValidationRule;
}

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
    data?: any;
}

export class ValidationMiddleware {
    static validate(data: any, schema: ValidationSchema): ValidationResult {
        const errors: string[] = [];
        const validatedData: any = {};

        // Verificar campos obrigatórios
        for (const [field, rule] of Object.entries(schema)) {
            const value = data[field];

            if (rule.required && (value === undefined || value === null || value === '')) {
                errors.push(`Campo '${field}' é obrigatório`);
                continue;
            }

            if (value === undefined || value === null) {
                continue;
            }

            // Validar tipo
            if (rule.type) {
                const typeError = this.validateType(field, value, rule.type);
                if (typeError) {
                    errors.push(typeError);
                    continue;
                }
            }

            // Validar comprimento para strings
            if (rule.type === 'string' && typeof value === 'string') {
                if (rule.minLength && value.length < rule.minLength) {
                    errors.push(`Campo '${field}' deve ter pelo menos ${rule.minLength} caracteres`);
                }
                if (rule.maxLength && value.length > rule.maxLength) {
                    errors.push(`Campo '${field}' deve ter no máximo ${rule.maxLength} caracteres`);
                }
            }

            // Validar valores numéricos
            if (rule.type === 'number' && typeof value === 'number') {
                if (rule.min !== undefined && value < rule.min) {
                    errors.push(`Campo '${field}' deve ser maior ou igual a ${rule.min}`);
                }
                if (rule.max !== undefined && value > rule.max) {
                    errors.push(`Campo '${field}' deve ser menor ou igual a ${rule.max}`);
                }
            }

            // Validar padrão
            if (rule.pattern && typeof value === 'string') {
                if (!rule.pattern.test(value)) {
                    errors.push(`Campo '${field}' tem formato inválido`);
                }
            }

            // Validação customizada
            if (rule.custom) {
                const customResult = rule.custom(value);
                if (customResult !== true) {
                    errors.push(typeof customResult === 'string' ? customResult : `Campo '${field}' é inválido`);
                }
            }

            validatedData[field] = value;
        }

        return {
            isValid: errors.length === 0,
            errors,
            data: errors.length === 0 ? validatedData : undefined
        };
    }

    private static validateType(field: string, value: any, type: string): string | null {
        switch (type) {
            case 'string':
                if (typeof value !== 'string') {
                    return `Campo '${field}' deve ser uma string`;
                }
                break;
            case 'number':
                if (typeof value !== 'number' || isNaN(value)) {
                    return `Campo '${field}' deve ser um número`;
                }
                break;
            case 'boolean':
                if (typeof value !== 'boolean') {
                    return `Campo '${field}' deve ser um booleano`;
                }
                break;
            case 'email':
                if (typeof value !== 'string' || !this.isValidEmail(value)) {
                    return `Campo '${field}' deve ser um email válido`;
                }
                break;
            case 'date':
                if (!(value instanceof Date) && !this.isValidDateString(value)) {
                    return `Campo '${field}' deve ser uma data válida`;
                }
                break;
        }
        return null;
    }

    private static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private static isValidDateString(dateString: string): boolean {
        const date = new Date(dateString);
        return !isNaN(date.getTime());
    }

    // Esquemas de validação predefinidos
    static getUsuarioSchema(): ValidationSchema {
        return {
            nome: {
                required: true,
                type: 'string',
                minLength: 2,
                maxLength: 100
            },
            email: {
                required: true,
                type: 'email'
            },
            senha: {
                required: true,
                type: 'string',
                minLength: 6,
                maxLength: 50
            }
        };
    }

    static getInvestimentoSchema(): ValidationSchema {
        return {
            tipo: {
                required: true,
                type: 'string',
                custom: (value) => ['AÇÃO', 'RENDA_FIXA', 'FUNDO'].includes(value)
            },
            nome: {
                required: true,
                type: 'string',
                minLength: 2,
                maxLength: 100
            },
            codigo: {
                required: true,
                type: 'string',
                minLength: 3,
                maxLength: 10
            }
        };
    }

    static getPortfolioSchema(): ValidationSchema {
        return {
            nome: {
                required: true,
                type: 'string',
                minLength: 2,
                maxLength: 50
            },
            descricao: {
                type: 'string',
                maxLength: 200
            }
        };
    }

    static getPrevisaoSchema(): ValidationSchema {
        return {
            nome: {
                required: true,
                type: 'string',
                minLength: 2,
                maxLength: 50
            },
            descricao: {
                required: true,
                type: 'string',
                minLength: 10,
                maxLength: 200
            }
        };
    }
}
