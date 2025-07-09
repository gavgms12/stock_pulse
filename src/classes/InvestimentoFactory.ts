import { Investimento } from './Investimento';
import { Acao } from './Acao';
import { RendaFixa } from './RendaFixa';
import { FundoInvestimento } from './FundoInvestimento';

export class InvestimentoFactory {
    static criarInvestimento(
        tipo: 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO',
        ...args: any[]
    ): Investimento {
        switch (tipo) {
            case 'AÇÃO':
                return new Acao(...args as ConstructorParameters<typeof Acao>);
            case 'RENDA_FIXA':
                return new RendaFixa(...args as ConstructorParameters<typeof RendaFixa>);
            case 'FUNDO':
                return new FundoInvestimento(...args as ConstructorParameters<typeof FundoInvestimento>);
            default:
                throw new Error('Tipo de investimento inválido');
        }
    }
}
