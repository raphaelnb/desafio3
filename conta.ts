import { Credito } from "./credito.js"
import { Sacar } from "./sacar.js"

export class Conta {
    numero: string;
    credito: Array<Credito> = [];
    debito: Array<Sacar> = [];
    
    depositar(valor: number, data: Date) {
        const deposito = new Credito(valor, data);
        this.credito.push(deposito);
    }

    sacar(valor: number, data: Date) {
        const saque = new Sacar(valor, data);
        this.debito.push(saque);
    }
    
}