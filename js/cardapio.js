let comidas = [
    {
        _id: "623cc9ff32e3af7ca656fff0",
		nome: "Mini Pizza",
		tipoProduto: "comida",
		preco: 10,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "segunda"
    },
    {
        _id: "623cc9ff32e3af7ca656fff1",
		nome: "Mini Pizza",
		tipoProduto: "comida",
		preco: 10,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "segunda"
    },
    {
        _id: "623cc96d32e3af7ca656fff2",
		nome: "Hamburguer",
		tipoProduto: "comida",
		preco: 20,
		imagem: "../images/burguerTeste.jpg",
		descricao: "300g",
        diaSemana: "terca"
    },
    {
        _id: "623cc96d32e3af7ca656fff3",
		nome: "Hamburguer",
		tipoProduto: "comida",
		preco: 20,
		imagem: "../images/burguerTeste.jpg",
		descricao: "300g",
        diaSemana: "terca"
    },
    {
        _id: "623cca8c32e3af7ca656fff4",
		nome: "Bolo",
		tipoProduto: "comida",
		preco: 15,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "quarta"
    },
    {
        _id: "623cca8c32e3af7ca656fff5",
		nome: "Bolo",
		tipoProduto: "comida",
		preco: 15,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "quarta"
    },
    {
        _id: "623cc9ff32e3af7ca656fff6",
		nome: "Brigadeiro",
		tipoProduto: "comida",
		preco: 10,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "quinta"
    },
    {
        _id: "623cc9ff32e3af7ca656fff7",
		nome: "Brigadeiro",
		tipoProduto: "comida",
		preco: 10,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "quinta"
    },
    {
        _id: "623cc9ff32e3af7ca656fff8",
		nome: "Bombom Aberto",
		tipoProduto: "comida",
		preco: 10,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "sexta"
    },
    {
        _id: "623cc9ff32e3af7ca656fff9",
		nome: "Bombom Aberto",
		tipoProduto: "comida",
		preco: 10,
		imagem: "../images/burguerTeste.jpg",
		descricao: "200g",
        diaSemana: "sexta"
    },
    {
        _id: "623cc9ff32e3af7ca656fff10",
		nome: "Coca-Cola",
		tipoProduto: "bebida",
		preco: 10,
		imagem: "../images/bebidaTeste.png",
		descricao: "200g",
        diaSemana: null
    },
    {
        _id: "623cc9ff32e3af7ca656fff11",
		nome: "Suco",
		tipoProduto: "bebida",
		preco: 10,
		imagem: "../images/bebidaTeste.png",
		descricao: "200g",
        diaSemana: null
    }
]

//#region Tarefas Iniciais

function carregaDiaSemana() {
    let semana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
    let date = new Date()

    let diaAtual = semana[date.getDay()];

    if (diaAtual == 'domingo' || diaAtual == 'sabado') {
        diaAtual = 'segunda'
    }

    let listaDias = document.querySelectorAll('.dia')

    for (let tagBtnDiaSemana of listaDias) {
        let diaSemana = verificaDiaSemanaBtn(tagBtnDiaSemana)

        if (diaSemana == diaAtual) {
            alteraBtnDiaSemana(tagBtnDiaSemana, diaSemana)
            break
        }
    }
}

//#endregion

//#region Eventos

function alteraBtnDiaSemana(tagBtnDiaSemana) {
    let tagBtnDiaSemanaAtivo = document.querySelector('.activeSemana')
    let diaSemana = verificaDiaSemanaBtn(tagBtnDiaSemana)
    
    tagBtnDiaSemanaAtivo.classList.remove('activeSemana')
    tagBtnDiaSemana.classList.add("activeSemana")

    let bVerificaBebida = diaSemana == 'bebida' ? true : false

    atualizaCards(diaSemana, bVerificaBebida)
}

function atualizaCards(diaSemana, bVerificaBebida) {
    let cards = document.querySelector('#cards')
    cards.innerHTML = ""

    let arrayFiltrado

    if (bVerificaBebida) {
        arrayFiltrado = filtraBebidas()
    } else {
        arrayFiltrado = filtraComidasDiaSemana(diaSemana)
    }

    arrayFiltrado.forEach(item => {
        cards.innerHTML += 
        ` 
        <div class="card">
            <div class="cardImg">
                <img src=${item.imagem} alt="">
            </div>
            <div class="cardBody">
                <h3>${item.nome}</h3>
                <div class="precoQuantidade">
                    <p>R$${item.preco.toFixed(2)}</p>
                    <div class="quantidade">
                        <button onclick="decrementClick('a${item._id}')">-</button>
                        <p class="num-contador" id=a${item._id} data-contador="1">1</p>
                        <button onclick="incrementClick('a${item._id}')">+</button>
                    </div>
                </div>
                <p><i class="fas fa-balance-scale"></i> ${item.descricao} Unidade</p>
                <button class="btnComprar" onclick="addCarrinho('a${item._id}', '${item.nome}', ${item.preco}, '${item.imagem}')">Comprar</button>
            </div>
        </div>
        `
    })
}

function verificaDiaSemanaBtn(tagBtnDiaSemana) {
    let diaSemana = tagBtnDiaSemana.getAttribute('data-dia')

    return diaSemana
}

function filtraComidasDiaSemana(diaSemana) {
    let arrayComidasFiltrado = comidas.filter(comida => {
        return comida.diaSemana == diaSemana
    })

    return arrayComidasFiltrado
}

function filtraBebidas() {
    arrayBebidasFiltrado = comidas.filter(bebida => {
        return bebida.tipoProduto == 'bebida'
    })

    return arrayBebidasFiltrado
}

//#region contador

function incrementClick(id, contadorPedido = false) {
    let {tagContador, valorContador} = dadosContador(id)
    ++valorContador

    verificaContadorPedido(contadorPedido, id, tagContador, valorContador)

    updateDisplay(tagContador, valorContador)
}

function decrementClick(id, contadorPedido = false) {
    let {tagContador, valorContador} = dadosContador(id)

    if (valorContador == 1 && contadorPedido == true) {
        removeCarrinho(id)
    } else if (valorContador == 1) {
        valorContador = 1
    } else {
        --valorContador
    }

    verificaContadorPedido(contadorPedido, id, tagContador, valorContador)

    updateDisplay(tagContador, valorContador)
}

function updateDisplay(tagContador, valorContador) {
    tagContador.setAttribute('data-contador', valorContador);

    tagContador.innerHTML = valorContador
}

function dadosContador(id) {
    let tagContador = document.querySelector(`#${id}`);
    let valorContador = Number(tagContador.getAttribute('data-contador'));

    return {tagContador, valorContador}
}

function verificaContadorPedido(contadorPedido, id, tagContador, valorContador) {
    if (contadorPedido) {
        atualizaQtdItensCarrinho(id, tagContador, valorContador)
        atualizaSubTotal()
    }
}

//#endregion

//#endregion

