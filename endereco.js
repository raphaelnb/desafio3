export class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }
    get cep() {
        return this._cep;
    }
    set cpf(cep) {
        this._cep = cep;
    }
    get logradouro() {
        return this._logradouro;
    }
    set logradouro(logradouro) {
        this._logradouro = logradouro;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero;
    }
    get complemento() {
        return this._complemento;
    }
    set complemento(complemento) {
        this._complemento;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(cidade) {
        this._cidade = cidade;
    }
    get uf() {
        return this._uf;
    }
    set uf(uf) {
        this._uf = uf;
    }
}
