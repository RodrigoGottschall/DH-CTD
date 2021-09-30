function Aluno(nome,notas,faltas){

    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

    this.calcularMedia = ()=>{
        let total = 0;
        this.notas.forEach(elemento => {
            total += elemento;
        });
        return total/this.notas.length;
    };
    this.faltou = ()=>{
        this.faltas++;
    }

}

module.exports = Aluno;
