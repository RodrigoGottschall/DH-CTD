function Conta(numero, tipo, saldo, titular) {
  this.numeroConta = numero;
  this.tipoConta = tipo;
  this.saldoTotal = saldo;
  this.titularConta = titular;
}
let Natte = new Conta(5486273622, "Corrente", 27771, "Abigael Natte")
let Connell = new Conta(1183971869, "Poupança", 8675, "Ramon Connell")
let Lafuente = new Conta(9582019689, "Poupança", 27363, "Jarret Lafuente")
let Ardley = new Conta(1761924656, "Poupança", 32415, "Ansel Ardley")
let Shurmer = new Conta(7401971607, "Poupança", 18789, "Jacki Shurmer")
let Mawtus = new Conta(630841470, "Corrente", 28776, "Jobi Mawtus")
let Latour = new Conta(4223508636, "Corrente", 2177, "Thomasin Latour")
let Verheijden = new Conta(185979521, "Poupança", 25994, "Lonnie Verheijden")
let Wannan = new Conta(3151956165, "Corrente", 7601, "Alonso Wannan")
let Huggett = new Conta(2138105881, "Poupança", 33196, "Bendite Huggett")

// console.log(Huggett);

//Lista de contas
let listaContas = [Natte, Connell, Lafuente, Ardley, Shurmer, Mawtus, Latour, Verheijden, Wannan, Huggett]

let banco = {
  clientes: listaContas,
  consultarCliente: function (nome) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularConta == nome) {
        return console.log(this.clientes[i]);
      }
    }
  },
  deposito: function (nome, valor) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularConta == nome) {
        this.clientes[i].saldoTotal = this.clientes[i].saldoTotal + valor;
        console.log("Deposito no valor de R$"+valor+ " na sua conta. Seu novo saldo é = R$"+ this.clientes[i].saldoTotal+".");
      }
    }
  },
  saque: function (nome, valor) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularConta == nome) {
        this.clientes[i].saldoTotal = this.clientes[i].saldoTotal - valor;
        if (this.clientes[i].saldoTotal <= 0) {
          console.log('Fundos insuficientes');
        } else {
          console.log("Você sacou R$"+valor+ " de sua conta. Seu novo saldo é = R$"+ this.clientes[i].saldoTotal+".");
        }
      }
    }
  }
};

banco.consultarCliente("Jobi Mawtus");
banco.deposito("Jobi Mawtus", 1000);
banco.saque("Jobi Mawtus", 500);
