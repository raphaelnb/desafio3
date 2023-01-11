import { Credito } from "./credito.js";
import { Sacar } from "./sacar.js";
export class Conta {
    constructor(numero, cliente) {
        //private _limite: number;
        this.credito = [];
        this.debito = [];
        this._numero = numero;
        this._cliente = cliente;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    depositar(valor, data) {
        let deposito = new Credito(valor, data);
        this.credito.push(valor);
    }
    sacar(valor, data) {
        /*if (valor <= this._limite) {*/
        let saque = new Sacar(valor, data);
        this.debito.push(valor);
        /*} else {
            console.log("Saldo indisponível");
        }*/
    }
}
