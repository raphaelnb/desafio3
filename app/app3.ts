import { Cliente } from "../cliente.js";
import { ContaCorrente } from '../contaCorrente.js'


let cliente = new Cliente('393.4234.4234-2', 'Alice', '(61)3389-2002', true);

let conta = new ContaCorrente('002478', cliente);

conta.limite = 1000; 

conta.depositar(100, new Date);
conta.depositar(100, new Date);
conta.depositar(100, new Date);

conta.sacar(50, new Date);

conta.calcularSaldo()