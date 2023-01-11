import { Cargo } from "../cargo.js";
import { Funcionario } from "../funcionario.js";

let atendente = new Cargo("Atendente")

let funcionario1 = new Funcionario(4500, '343.434.3234', 'Rodolfo', '73822323', atendente);

let gerente = new Cargo("Gerente")

let funcionario2 = new Funcionario(9500, '332.344.090', 'Aline', '33238743', gerente);




console.log(funcionario1);
console.log(funcionario2);

