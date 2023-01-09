export class Funcionario extends Pessoa {
    private _salario: number;

    public get salario(): number {
        return this._salario;
    }

    public set salario(salario: number) {
        this._salario = salario;
    }
}