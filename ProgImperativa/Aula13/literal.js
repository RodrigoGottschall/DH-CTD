let json  = {
  "nome": "Rodrigo Gottschall",
  "apelido": "Alegria",
  "idade": 40,
  "usuario": "rogottsch",
  "email": "rogottsch@gmail.com"
}

// console.log(json);

let celular = {
  modelo: "moto G7",
  status: 'desligado',
  power : function (status) {
      this.status = status ? 'Ligado': 'Desligado';
      if (status === true)
      console.log('Ligando celular');
      else 
      console.log('Desligando celular');
  }
}

celular.power(true);

console.log(celular);


//  teste objeto literal IMC


let PessoaHumana = {
  nome:"Janaina",
  idade:30,
  sexo:"feminino",
  altura: 0,
  peso: 0,
  imc: function(){
      return  this.peso / (this.altura * this.altura);
  }
}

PessoaHumana.peso = 80;
PessoaHumana.altura = 1.80;

console.log(PessoaHumana.imc());