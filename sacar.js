export class Sacar {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    get valor() {
        return this._valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
}
