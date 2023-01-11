import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa {
    private _salario: number;

    constructor(salario: number) {
        super();
        this._salario = salario;
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(salario: number) {
        this._salario = salario;
    }
}