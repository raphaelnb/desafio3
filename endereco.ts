export class Endereco {
    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _cidade: string;
    private _uf: string;

    public get cep(): string {
        return this._cep;
    }

    public set cpf(cep: string) {
        this._cep = cep;
    }

    public get logradouro(): string {
        return this._logradouro;
    }

    public set logradouro(logradouro: string) {
        this._logradouro = logradouro;
    }

    public get numero(): string {
        return this._numero;
    }

    public set numero(numero: string) {
        this._numero;
    }
    
    public get complemento(): string {
        return this._complemento
    }

    public set complemento(complemento: string) {
        this._complemento;
    }
    
    public get cidade(): string {
        return this._cidade;
    }

    public set cidade(cidade: string) {
        this._cidade = cidade
    }

    public get uf(): string {
        return this._uf
    }

    public set uf(uf: string) {
        this._uf = uf;
    }
    
    
}