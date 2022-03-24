const cardsSection = document.getElementById("card-container");
const formulario = document.getElementById("form");

let produto = document.querySelector('.cadNomeInput');
let imagem = document.querySelector('.cadUrlInput');
let preco = document.querySelector('.cadPrecoInput');
let descricao = document.querySelector('#cadDescricaoInput');

// //se tiver valores no localStorage ele pega esses valores, se não tiver, ele seta um array vazio.
let listaProdutos = JSON.parse(localStorage.getItem("listaProduto") || '[]');

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    listaProdutos.push(
        {
            nome: produto.value,
            imagem: imagem.value, 
            preco: preco.value,
            descricao: descricao.value
        }
    );

    //cria o card com os valores passado no formulário
    criarCard(produto.value, imagem.value, preco.value, descricao.value);

    //Seta os valores do listaProdutos no localStorage
    localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));

    //Resetando os valores dentro do formulário
    formulario.reset();

});


//função para criar os cartões
function criarCard(nome, imagem, preco, descricao) {
    cardsSection.innerHTML = `
    <article class="card">
        <img src="${imagem}"
            alt="">
        <div class="card-div">
            <h2>${nome}</h2>
            <span>Preço: R$ ${preco}</span>
            <span>Descrição: ${descricao}</span>
        </div>
        <div class="div-btn-circle">
            <button class="btn-circle">+</button>
        </div>
        <div class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${imagem}">
                <h3>${nome}</h3>
                <p>Preço: R$ ${preco}</p>
                <p class="descricao">Descrição: ${descricao}</p>
                <button class="btn-deletar">Deletar</button>
            </div>
        </div>
    </article>
`;
    modalsFunctions();
}

//Função para chamar os cards armazenados no localStorage, quando o usuário der f5 ou fechar e abrir a página
window.onload = function () {
  //Percorre todos os itens e valores do objeto e cria os cartões com ele
  listaProdutos.map(value => {
    criarCard(value.nome, value.imagem, value.preco, value.descricao);
});
};

// Função do modal
function modalsFunctions() {

    //Variáveis criadas para receberem toods os modais e seus valores
    let modals = document.querySelectorAll(".modal");
    let btnsCircle = document.querySelectorAll(".btn-circle");
    let spans = document.querySelectorAll(".close");
    let btnsDeletar = document.querySelectorAll(".btn-deletar");
    let cards = document.querySelectorAll(".card");

    //Looping para poder pegar todos os nós dos modais criados
    for (let i = 0;i < cards.length;i++) {
        let btnCircle = btnsCircle[i];
        let btnDeleter = btnsDeletar[i];
        let modal = modals[i];
        let span = spans[i];
        let card = cards[i];

        //função para abrir o modal
        btnCircle.addEventListener('click', () => {
            modal.style.display = "block";
        });

        //função para deletar o card 
        btnDeleter.addEventListener('click', () => {
            card.remove();
            listaProdutos.splice(i, 1);
            localStorage.setItem("listaProduto", JSON.stringify(listaProdutos));
        });

        //função para fechar o modal
        span.addEventListener('click', () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    }
}


