class Cargo {
    private _nome: string;

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }
}