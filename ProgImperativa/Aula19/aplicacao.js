let listaDePessoas = [
  {
    nome: "Dumith",
    sexo: "M",
    altura: 1.88,
    opiniao: 2,
    idade: 23,
  },
  {
    nome: "João",
    sexo: "M",
    altura: 1.95,
    opiniao: 1,
    idade: 10,
  },
  {
    nome: "Odete",
    sexo: "F",
    altura: 1.47,
    opiniao: 2,
    idade: 15,
  },
  {
    nome: "Justino",
    sexo: "M",
    altura: 1.7,
    opiniao: 3,
    idade: 30,
  },
  {
    nome: "Adriano",
    sexo: "F",
    altura: 1.63,
    opiniao: 1,
    idade: 27,
  },
  {
    nome: "Marina",
    sexo: "F",
    altura: 1.58,
    opiniao: 3,
    idade: 30,
  },
  {
    nome: "Merlin",
    sexo: "M",
    altura: 1.82,
    opiniao: 1,
    idade: 5,
  },
  {
    nome: "Vitor",
    sexo: "M",
    altura: 1.6,
    opiniao: 2,
    idade: 60,
  },
  {
    nome: "Sahara",
    sexo: "F",
    altura: 1.42,
    opiniao: 1,
    idade: 10,
  },
  {
    nome: "Mírtes",
    sexo: "F",
    altura: 1.69,
    opiniao: 2,
    idade: 20,
  },
  {
    nome: "José",
    sexo: "M",
    altura: 1.6,
    opiniao: 2,
    idade: 16,
  },
  {
    nome: "Maria",
    sexo: "F",
    altura: 1.62,
    opiniao: 1,
    idade: 25,
  },
  {
    nome: "Carlos",
    sexo: "M",
    altura: 1.8,
    opiniao: 3,
    idade: 18,
  },
  {
    nome: "Rodrigo",
    sexo: "M",
    altura: 1.82,
    opiniao: 3,
    idade: 28,
  },
  {
    nome: "Bruno",
    sexo: "M",
    altura: 1.7,
    opiniao: 1,
    idade: 33,
  },
];
function maiorAltura(array) {
  var maior = 0.0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].altura > maior) {
      maior = array[i].altura;
    }
  }
  return maior;
}

function menorAltura(array) {
  var menor = array[0].altura;
  for (var i = 1; i < array.length; i++) {
    if (array[i].altura < menor) {
      menor = array[i].altura;
    }
  }
  return menor;
}

function mediaAlturas(array, sexo) {
  var media = 0;
  var quantidade = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].sexo == sexo.toUpperCase()) {
      quantidade++;
      media += array[i].altura;
    }
  }
  return media / quantidade;
}

function quantosSexo(array, sexo) {
  var quantidade = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].sexo == sexo.toUpperCase()) {
      quantidade++;
    }
  }
  return quantidade;
}

function mediaOtimo(array) {
  var idadesTotal = 0;
  var quantidade = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].opiniao == 3) {
      quantidade++;
      idadesTotal += array[i].idade;
    }
  }
  return idadesTotal / quantidade;
}

function quantosRegular(array) {
  var quantidade = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].opiniao == 1) {
      quantidade++;
    }
  }
  return quantidade;
}

function porcentagemBom(array) {
  var quantidade = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].opiniao == 2) {
      quantidade++;
    }
  }
  return quantidade / array.length;
}

console.log(maiorAltura(listaDePessoas));
console.log(menorAltura(listaDePessoas));
console.log(mediaAlturas(listaDePessoas, "F"));
console.log(quantosSexo(listaDePessoas, "M"));
console.log(mediaOtimo(listaDePessoas));
console.log(quantosRegular(listaDePessoas));
console.log(porcentagemBom(listaDePessoas));