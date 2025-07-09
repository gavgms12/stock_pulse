import { Investimento } from './Investimento';

export interface Observador {
    atualizar(investimento: Investimento, mensagem: string): void;
}
