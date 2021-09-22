// ex1
let loopPares = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log("O numero " + i + ' é par')
    }
    else {
      console.log(i)
    }
  }
}
loopPares(3, 5)

// ex2
let loopImpares = (a, b) => {
  for (let i = 1; i <= 100; i++) {
    if ((i + a) % 2 !== 0) {
      console.log(b)
    }
    else {
      console.log('O resultado da soma é: ' + (i + a));
    }
  }
}
loopImpares(3, 'xablau')

// ex3
let array = [];
function soma(a) {
  for (let i = a; i > 0; i--) {
    array.push(i);
  }
}
soma(8)
let somatoria = array.reduce((a, b) => a + b);

console.log(somatoria);

// ex 4 
function newArray(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  return arr;
}

// ex 5 

function splitCustom(frase) {
  var arr = [];
  for (i = 0; i < frase.length; i++) {
    arr.push(frase[i]);
  }
  return arr;
}

// ex 6
function moverZeros(arr) {
  var zerosTemp = [];
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      zerosTemp = [...zerosTemp, ...arr.splice(i, 1)];
      --i;
    }
    else {
      i++;
    }
  }
  return [...arr, ...zerosTemp]

  // ex 7

  function arrayHandler(arr1, arr2) {
    if (arr1.length != arr2.length) {
      console.log('arrays de tamanho diferentes')
      return 0;
    }
    else {
      for (var i = 0; i < arr1.length; i++) {
        console.log(`O elemento ${i} do array 1 e ${arr1[i]} e o do array 2 e ${arr2[i]}`)
      }
    }
  }

  // ex 8

  function arrayObjects(num) {
    var temp = [];
    for (var i = 1; i <= num; i++) {
      temp.push({ valor: i });
    }
    return temp;
  }

  // ex 9

  function arrayObjectsTwo(palavra, num) {
    var temp = [];
    for (var i = 1; i <= num; i++) {
      //temp.push(JSON.parse(`{"${palavra}":"${i}"}`));
      temp.push({ [palavra]: [i] })
    }
    return temp;
  }
  console.log(arrayObjectsTwo("ola mundo", 10))
  arrayObjectsTwo("ola mundo", 10).forEach((a) => { console.log(JSON.stringify(a)) })
}

