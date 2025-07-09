"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestimentoFactory = void 0;
const Acao_1 = require("./Acao");
const RendaFixa_1 = require("./RendaFixa");
const FundoInvestimento_1 = require("./FundoInvestimento");
class InvestimentoFactory {
    static criarInvestimento(tipo, ...args) {
        switch (tipo) {
            case 'AÇÃO':
                return new Acao_1.Acao(...args);
            case 'RENDA_FIXA':
                return new RendaFixa_1.RendaFixa(...args);
            case 'FUNDO':
                return new FundoInvestimento_1.FundoInvestimento(...args);
            default:
                throw new Error('Tipo de investimento inválido');
        }
    }
}
exports.InvestimentoFactory = InvestimentoFactory;
