package entities.subclasses;

public class Medicamento {

    private int id;
    private String nomeMedicamento;
    private int quantidade;

    //Construtores

    public Medicamento(){

    }

    public Medicamento(int id, String nomeMedicamento, int quantidade) {
        this.id = id;
        this.nomeMedicamento = nomeMedicamento;
        this.quantidade = quantidade;
    }

    //Getters e Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeMedicamento() {
        return nomeMedicamento;
    }

    public void setNomeMedicamento(String nomeMedicamento) {
        this.nomeMedicamento = nomeMedicamento;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public void consultarMedicamento(String receitaUsuario, int quantidade){
        if(this.nomeMedicamento == receitaUsuario) {
            if(this.quantidade >= quantidade){
                System.out.println("Temos o medicamento em estoque");
            }else {
                System.out.println("Sem estoque deste medicamento");
            }
        }
    }

    @Override
    public String toString() {
        return "Medicamento{" +
                "id=" + id +
                ", nomeMedicamento='" + nomeMedicamento + '\'' +
                ", quantidade=" + quantidade +
                '}';
    }
}
