export abstract class BaseController {
    protected handleError(error: any): { success: false; error: string } {
        console.error('Erro no controller:', error);
        return {
            success: false,
            error: error.message || 'Erro interno do servidor'
        };
    }

    protected validateRequired(data: any, fields: string[]): string[] {
        const errors: string[] = [];
        
        for (const field of fields) {
            if (!data[field]) {
                errors.push(`Campo '${field}' é obrigatório`);
            }
        }
        
        return errors;
    }

    protected success<T>(data: T, message?: string): { success: true; data: T; message?: string } {
        return {
            success: true,
            data,
            message
        };
    }

    protected error(message: string): { success: false; error: string } {
        return {
            success: false,
            error: message
        };
    }
}
