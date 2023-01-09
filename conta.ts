import { Credito } from "./credito.js"
import { Sacar } from "./sacar.js"

export class Conta {
    private _numero: string;
    private _limite: number;
    credito: Array<Credito> = [];
    debito: Array<Sacar> = [];

    constructor(numero: string) {
        this._numero = numero;
    }

    public get numero(): string {
        return this._numero;
    }

    public set numero(numero: string) {
        this._numero = numero;
    }
    
    depositar(valor: number, data: Date) {
        let deposito = new Credito(valor, data);
        this.credito.push(deposito);
    }

    sacar(valor: number, data: Date) {
        if (valor <= this._limite) {
            let saque = new Sacar(valor, data);
            this.debito.push(saque);
        } else {
            console.log("Saldo indisponível");
        }
    }
    
}