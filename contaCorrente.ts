import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    private _limite: number;

    public get limite(): number {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

    transferir(contaDestino: Conta, valor: number) {
        if (valor <= this._limite) {
            this.sacar(valor, new Date);
            contaDestino.depositar(valor, new Date);
            console.log("transferencia realizada!")
        } else {
            console.log("saldo indisponível");
        }
    } 

    calcularSaldo() {
        let saldo: number = 0;

        for (let i = 0; i <= this.credito.length; i++) {
            saldo = saldo + this.credito[i];
        }

        for (let i = 0; i <= this.debito.length; i++) {
            saldo = saldo - this.debito[i];
        }

        console.log(saldo);
    }
}