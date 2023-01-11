import { Cliente } from "../cliente.js";
import { ContaPoupanca } from "../contaPoupanca.js";

let cliente1 = new Cliente('393.4234.4234-2', 'Alice', '(61)3389-2002', true);

let conta = new ContaPoupanca('0034003', cliente1);

conta.rentabilidadeMensal = 1/100;

conta.depositar(200, new Date("2022-01-01"));
conta.depositar(200, new Date("2022-02-01"));
conta.depositar(200, new Date("2022-03-01"));
conta.depositar(200, new Date("2022-04-01"));
conta.depositar(200, new Date("2022-05-01"));
conta.depositar(200, new Date("2022-06-01"));
conta.depositar(200, new Date("2022-07-01"));
conta.depositar(200, new Date("2022-08-01"));
conta.depositar(200, new Date("2022-09-01"));
conta.depositar(200, new Date("2022-10-01"));
conta.depositar(200, new Date("2022-11-01"));
conta.depositar(200, new Date("2022-12-01"));

conta.sacar(100, new Date("2022-03-05"));
conta.sacar(200, new Date("2022-07-08"));

conta.calcularSaldo();