import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa {
    private _salario: number;

    constructor(
        salario: number,
        cpf: string,
        nome: string,
        telefone: string
        ) {
        super(cpf, nome, telefone);
        this._salario = salario;
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(salario: number) {
        this._salario = salario;
    }
}