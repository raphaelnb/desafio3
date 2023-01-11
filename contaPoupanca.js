import { Conta } from "./conta.js";
export class ContaPoupanca extends Conta {
    get rentabilidadeMensal() {
        return this._rentabilidadeMensal;
    }
    set rentabilidadeMensal(taxa) {
        this._rentabilidadeMensal = taxa;
    }
    calcularRendimento() {
        let saldo;
        for (let i = 0; i <= this.credito.length; i++) {
            saldo += this.credito[i];
        }
        let rentabilidade = saldo * 1.15;
        return rentabilidade;
    }
    calcularSaldo() {
    }
}
