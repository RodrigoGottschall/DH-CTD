import entities.Endereco;
import entities.Funcionario;
import entities.subclasses.Atendimento;
import entities.subclasses.Caixa;
import entities.subclasses.Medicamento;

public class Programa {

    public static void main(String[] args) {

        //INSTANCIANDO A CLASSE ENDEREÇO.
        Endereco end_1 = new Endereco(1, "Rua Petrolina", "100","Itatiba","SP");
        Endereco end_2 = new Endereco(2, "Av. Brasil", "200","Cabreúva","SP");
        Endereco end_3 = new Endereco(3, "Av. São Paulo", "300","Campinas","SP");

        //INSTANCIANDO A CLASSE FUNCIONÁRIO E AS SUBCLASSES ATENDIMENTO E CAIXA.
        Funcionario funcionario_1 = new Atendimento(1,"Rodrigo", "Gottschall","111.111.111-11",end_1,"Farmaceutico");
        Funcionario funcionario_2 = new Atendimento(2,"Ederson","Oliveira","222.222.222-22",end_2,"Auxiliar de farmácia");
        Funcionario funcionario_3 = new Caixa(3,"Ana","Beatriz","333.333.333-33",end_3,"Operador de Caixa");

        //INSTANCIANDO A CLASSE MEDICAMENTO
        Medicamento medicamento_1 = new Medicamento(1, "Dipirona", 10);
        Medicamento medicamento_2 = new Medicamento(2, "Cataflan", 30);

        System.out.println("IMPRESSÃO DOS DADOS DOS FUNCIONÁRIOS: ");
        System.out.println();
        System.out.println(funcionario_1);
        System.out.println(funcionario_2);
        System.out.println(funcionario_3);
        System.out.println();
        System.out.println("IMPRESSÃO DOS DADOS DOS MÉTODOS: ");
        System.out.println();
        System.out.println("Método consultando medicamento - Item: Medicamento_1");
        medicamento_1.consultarMedicamento("Dipirona",1);
        System.out.println();
        System.out.println("Método consultando medicamento - Item: Medicamento_2");
        medicamento_2.consultarMedicamento("Cataflan",50);
        System.out.println();
        System.out.println("Método recebendo pagamento");
        System.out.println("Você realizou uma compra de R$: "+ Caixa.receberPagamento(200.50,"CRÉDITO"));

    }
}
