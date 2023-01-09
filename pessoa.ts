class Pessoa {
    private _cpf: string 
    private _nome: string
    private _telefone: string

    public get nome(): string {
        return this._nome;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get telefone(): string {
        return this._telefone;
    }
}