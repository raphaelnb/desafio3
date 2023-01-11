import { Pessoa } from "./pessoa.js";
export class Funcionario extends Pessoa {
    constructor(salario, cpf, nome, telefone, cargo) {
        super(cpf, nome, telefone);
        this._salario = salario;
        this._cargo = cargo;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    get cargo() {
        return this._cargo;
    }
    set cargo(cargo) {
        this._cargo;
    }
}
