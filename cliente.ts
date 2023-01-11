import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa {
    private _vip: boolean;
    private _endereco: Endereco;
    private _listaDeEnderecos: Array<Endereco> = [];
    
    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        vip: boolean
        ) {
        super(cpf, nome, telefone);
        this._vip = vip;
    }

    public get vip(): boolean {
        return this._vip
    }

    public set vip(vip: boolean) {
        this._vip = vip;
    }

    public get listaDeEnderecos(): Array<Endereco> {
        return this._listaDeEnderecos;
    }

    public set listaDeEnderecos(listaDeEnderecos: Array<Endereco>) {
        this._listaDeEnderecos = listaDeEnderecos;
    }

    public novoEndereco(endereco: Endereco) {
        this._listaDeEnderecos.push(endereco);
    }

    listarEnderecos() {
        console.log(this._listaDeEnderecos);
    }
}