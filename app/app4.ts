import { Cliente } from "../cliente.js";
import { ContaCorrente } from "../contaCorrente.js";
import { ContaPoupanca } from "../contaPoupanca.js"

let cliente1 = new Cliente('393.4234.4234-2', 'Alice', '(61)3389-2002', true);
let cliente2 = new Cliente('893.4534.4334-5', 'Lucas', '(23)3998-2398', true);

let conta1 = new ContaCorrente('0024002', cliente1);

conta1.depositar(1000, new Date);

let conta2 = new ContaPoupanca('0034003', cliente2);

conta2.depositar(1000, new Date);

conta1.limite = 1000;

conta1.transferir(conta2, 500);

