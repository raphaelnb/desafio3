import { Pessoa } from "./pessoa.js";
export class Cliente extends Pessoa {
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this._listaDeEnderecos = [];
        this._vip = vip;
    }
    get vip() {
        return this._vip;
    }
    set vip(vip) {
        this._vip = vip;
    }
    get listaDeEnderecos() {
        return this._listaDeEnderecos;
    }
    set listaDeEnderecos(listaDeEnderecos) {
        this._listaDeEnderecos = listaDeEnderecos;
    }
    novoEndereco(endereco) {
        this._listaDeEnderecos.push(endereco);
    }
    listarEnderecos() {
        console.log(this._listaDeEnderecos);
    }
}
