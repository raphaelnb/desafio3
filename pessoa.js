export class Pessoa {
    constructor(cpf, nome, telefone) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(telefone) {
        this._telefone = telefone;
    }
}
