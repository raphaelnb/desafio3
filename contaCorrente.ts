import { Conta } from "./conta.js";

class contaCorrente extends Conta {
    private _limite: number;

    transferir(contaDestino: Conta, valor: number) {
        if (valor <= this._limite) {
            this.sacar(valor, new Date);
            contaDestino.depositar(valor, new Date);
        } else {
            console.log("saldo indisponível");
        }
    } 

    calcularSaldo(credito: number, debito: number, _limite: number) {
        let saldo: any;

        for (let i = 0; i <= this.credito.length; i++) {
            saldo += this.credito[i].valor;
        }

        for (let i = 0; i <= this.debito.length; i++) {
            saldo -= this.debito[i].valor;
        }

        return saldo + _limite;
    }
}