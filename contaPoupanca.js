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
            saldo += this.credito[i] * this.rentabilidadeMensal;
        }
        let rentabilidade = saldo * this.rentabilidadeMensal;
        return rentabilidade;
    }
    calcularSaldo() {
        let saldo = 0;
        for (let i = 0; i <= this.credito.length; i++) {
            saldo = saldo + this.credito[i];
        }
        for (let i = 0; i <= this.debito.length; i++) {
            saldo = saldo - this.debito[i];
        }
        let rentabilidade = saldo * this.rentabilidadeMensal;
        //return saldo * this.rentabilidadeMensal;
        console.log(rentabilidade);
    }
}
