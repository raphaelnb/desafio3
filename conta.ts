import { Credito } from "./credito.js"
import { Sacar } from "./sacar.js"

class Conta {
    numero: String
    
    depositar(valor: number, data: Date) {
        const deposito = new Credito(valor, data);
    }

    sacar(valor: number, data: Date) {
        const sacar = new Sacar(valor, data);
    }
    
}