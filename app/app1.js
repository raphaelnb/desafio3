import { Cargo } from "../cargo.js";
import { Funcionario } from "../funcionario.js";
let atendente = new Cargo("Atendente");
let funcionario1 = new Funcionario(4500, '34343', 'Rodolfo', '73822323', atendente);
let gerente = new Cargo("Gerente");
let funcionario2 = new Funcionario(9500, '332344090', 'Aline', '33238743', gerente);
//let funcionario2 = new Funcionario('393.4234.4234-2', 'Alice', '(61)3389-2002');
//funcionario2.salario = 5.000;
console.log(funcionario1);
console.log(funcionario2);
