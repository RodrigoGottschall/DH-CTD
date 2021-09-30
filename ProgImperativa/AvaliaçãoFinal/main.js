const Aluno = require('./aluno');
var estudantes = require('./estudantes')


var curso = {
    nome:"DH Prog Imperativa",
    notaAprovacao:7,
    faltaMax:3,
    listaEst:estudantes,
    adicionaAluno:(aluno,curso)=>{
        curso.listaEst.push(aluno);
    },
    alunoAprovado:(aluno,curso)=>{
        if(aluno.calcularMedia()>=curso.notaAprovacao && aluno.faltas<curso.faltaMax){
            return true;
        }
        else if(aluno.faltas==curso.faltaMax && aluno.calcularMedia()>(curso.notaAprovacao*1.1))
        {
            return true;
        }
        else{
            return false;
        }
    },
    avaliaAlunos:(curso)=>{
        console.log(curso.listaEst)
        var retorno = [];
        curso.listaEst.forEach((aluno)=>{
            retorno.push(curso.alunoAprovado(aluno,curso))
        })
        return retorno;
    }
}
//Teste Passo 1
console.log("Teste Passo 1")
console.log(new Aluno("Rafael",[10,6,5],0));
console.log('========================================================================')

//teste Passo2
var rafael = new Aluno("Rafael",[10,6,5],0)
console.log("Teste Passo 2")
console.log("Funcao calcular a Media")
console.log(rafael.calcularMedia());
console.log('========================================================================')
console.log("Funcao Aumentar Faltas")
console.log(`Faltas iniciais de Rafael ${rafael.faltas}`)
rafael.faltou();
console.log(`Faltas atualizadas de Rafael ${rafael.faltas}`)
console.log('========================================================================')

//teste Passo 3
console.log("Criacao do objeto Curso")
console.log(JSON.stringify(curso))
console.log('========================================================================')

//teste Paso 4
console.log("Teste da funcao adicionar aluno");
curso.adicionaAluno(new Aluno("Rodrigo",[8,9,7],0),curso);
console.log(`Acrescentado o aluno Rodrigo :${JSON.stringify(curso.listaEst[curso.listaEst.length-1])}`);
console.log('========================================================================')

//Teste passo 5 e 6
console.log("Teste da funcao aprovados/reprovados")
console.log(`retrono da funcao avaliando a aprovacao de cada aluno :${curso.avaliaAlunos(curso)}`)
console.log('========================================================================')
