import { Conta } from "./conta.js";
export class ContaCorrente extends Conta {
    get limite() {
        return this._limite;
    }
    set limite(limite) {
        this._limite = limite;
    }
    transferir(contaDestino, valor) {
        if (valor <= this._limite) {
            this.sacar(valor, new Date);
            contaDestino.depositar(valor, new Date);
        }
        else {
            console.log("saldo indisponível");
        }
    }
    calcularSaldo() {
        let saldo = 0;
        for (let i = 0; i <= this.credito.length; i++) {
            saldo = saldo + this.credito[i];
        }
        for (let i = 0; i <= this.debito.length; i++) {
            saldo = saldo - this.debito[i];
        }
        console.log(saldo);
    }
}
