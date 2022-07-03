package entities.subclasses;

import entities.Endereco;
import entities.Funcionario;

public class Atendimento extends Funcionario {
    private String cargo;

    //Construtores

    public Atendimento(int id, String nome, String sobrenome, String cpf, Endereco endereco, String cargo) {
        super(id, nome, sobrenome, cpf, endereco);
        this.cargo = cargo;
    }

    //Getters e Setters

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    @Override
    public String toString() {
        return super.toString() +
                "Atendimento{" +
                "cargo='" + cargo + '\'' +
                "} ";
        System.out.println();
    }
}

