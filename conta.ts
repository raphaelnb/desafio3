import { Credito } from "./credito.js"
import { Sacar } from "./sacar.js"
import { Cliente } from "./cliente.js"

export abstract class Conta {
    private _numero: string;
    private _cliente: Cliente;
   //private _limite: number;
    credito: Array<number> = [];
    debito: Array<number> = [];

    constructor(numero: string, cliente: Cliente) {
        this._numero = numero;
        this._cliente = cliente;
    } 

    public get numero(): string {
        return this._numero;
    }

    public set numero(numero: string) {
        this._numero = numero;
    }
    
    depositar(valor: number, data: Date) {
        let deposito = new Credito(valor, data);
        this.credito.push(valor);
    }

    sacar(valor: number, data: Date) {
        /*if (valor <= this._limite) {*/
            let saque = new Sacar(valor, data);
            this.debito.push(valor);
        /*} else {
            console.log("Saldo indisponível");
        }*/
    }
    
}