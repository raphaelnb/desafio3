import { Credito } from "./credito.js"
import { Sacar } from "./sacar.js"

export class Conta {
    numero: string;
    limite: number;
    credito: Array<Credito> = [];
    debito: Array<Sacar> = [];

    get
    
    depositar(valor: number, data: Date) {
        let deposito = new Credito(valor, data);
        this.credito.push(deposito);
    }

    sacar(valor: number, data: Date) {
        if (valor <= this.limite) {
            let saque = new Sacar(valor, data);
            this.debito.push(saque);
        } else {
            console.log("Saldo indisponível");
        }
    }
    
}