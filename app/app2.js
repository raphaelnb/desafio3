import { Cliente } from "../cliente.js";
import { Endereco } from "../endereco.js";
let cliente1 = new Cliente('393.4234.4234-2', 'Alice', '(61)3389-2002', true);
let endereco1 = new Endereco('756983-45', 'Rua Almeida', '789', 'terreo', 'Rio de Janeiro', 'RJ');
let endereco2 = new Endereco('504507-23', 'Rua das Araucárias', '887', 'Loja', 'São Paulo', 'SP');
let endereco3 = new Endereco('32309-85', 'Rua dos Pioneiros', '231', 'casa', 'Florianópolis', 'SC');
cliente1.novoEndereco(endereco1);
cliente1.novoEndereco(endereco2);
cliente1.novoEndereco(endereco3);
cliente1.listarEnderecos();
//console.log(cliente1)
//console.log(endereco1);
