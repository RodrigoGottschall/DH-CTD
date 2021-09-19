// Micro desafio Arrow:
let mensagem = () => console.log('Olá, bom dia');
mensagem();

let soma = (n1, n2) => console.log('A soma é = ' + (n1 + n2));
soma(10, 10);

// Micro desafio Callback:
let acaoCarro = (movimento) => console.log(movimento());

let andar = () => 'Seu carro está andando';
let parar = () => 'Seu carro parou';

acaoCarro(andar);
acaoCarro(parar);


// Mesa de Trabalho:
let fizzBuzz = (a, b) => {
    for (let i = 1; i <= 100; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log(i + " FizzBuzz")
        }
        else if (i % a == 0) {
            console.log(i + " Fizz ");
        }
        else if (i % b == 0) {
            console.log(i + " Buzz ")
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz(3, 5)