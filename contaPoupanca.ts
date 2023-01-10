import { Conta } from "./conta.js";

class contaPoupanca extends Conta {
    private _rentabilidadeMensal: number;

    public get rentabilidadeMensal(): number {
        return this._rentabilidadeMensal;
    }

    public set rentabilidadeMensal(taxa: number) {
        this._rentabilidadeMensal = taxa;
    }

    calcularRendimento() {
        let saldo: any;
        for (let i = 0; i <= this.credito.length; i++) {
            saldo += this.credito[i].valor;
        }

        let rentabilidade = saldo * 1.15;
        return rentabilidade;
    }

    calcularSaldo() {
        
    }
}