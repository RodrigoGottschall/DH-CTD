package entities;

public class Funcionario {

    private int id;
    private String nome;
    private String sobrenome;
    private String cpf;
    private Endereco endereco;

    //Construtores

    public Funcionario(){

    }

    public Funcionario(int id, String nome, String sobrenome, String cpf, Endereco endereco) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.endereco = endereco;
    }

    //Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    //Métodos
    public void trabalhar() {
        System.out.println("Funcionário(a) " + getNome() + " começou a trabalhar na farmacia.");
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", cpf=" + cpf +
                ", endereco=" + endereco +
                '}';
    }
}
