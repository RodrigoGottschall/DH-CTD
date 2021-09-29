let funcSoma = require ("./soma");
let funcSub = require ("./sub");
let funcMult = require ("./mult");
let funcDiv = require ("./div");

console.log(funcSoma(5, 10));
console.log(funcSub(5, 10));
console.log(funcMult(5, 10));
console.log(funcDiv(5, 10));

let dadosPessoal = require ("./nome")

console.log(dadosPessoal.nome+" "+dadosPessoal.sobrenome+", "+dadosPessoal.idade);