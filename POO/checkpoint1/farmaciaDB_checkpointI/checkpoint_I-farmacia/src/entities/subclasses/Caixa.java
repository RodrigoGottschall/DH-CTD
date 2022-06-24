package entities.subclasses;

import entities.Endereco;
import entities.Funcionario;

import java.util.Scanner;

public class Caixa extends Funcionario {

    private String cargo;

    //Construtores

    public Caixa(int id, String nome, String sobrenome, String cpf, Endereco endereco, String cargo) {
        super(id, nome, sobrenome, cpf, endereco);
        this.cargo = cargo;
    }

    //Getter e Setters

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    //Métodos
    public static Double receberPagamento(double valor, String formaDePagamento) {
        Scanner sc1 = new Scanner(System.in);
        Double debitoCliente = valor;
        if (formaDePagamento == "Á VISTA") {
            Double desconto = valor * 0.10;
            return debitoCliente = valor - desconto;
        } else if (formaDePagamento == "CRÉDITO") {
            System.out.print("Selecione a quantidade de vezes que você quer parcelar a sua compra (Acima de 03 vezes será cobrado 20% de juros): ");
            int numeroDeParcelas = sc1.nextInt();
            if (numeroDeParcelas <= 3) {
                return debitoCliente;
            } else {
                Double acrescimo = valor * 0.20;
                return debitoCliente + acrescimo;
            }
        }
        return debitoCliente;
    }

    @Override
    public String toString() {
        return super.toString() +
                "Caixa{" +
                "cargo='" + cargo + '\'' +
                "} ";
    }
}








