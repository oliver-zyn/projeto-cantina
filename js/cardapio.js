let comidas = {
    segunda: {
        comida01: {
            id: '213o9cdu8w',
            nome: 'Comida 01 Segunda',
            img: '../images/burguerTeste.jpg',
            preco: '30.00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Segunda',
            img: '../images/burguerTeste.jpg',
            preco: '20.00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Segunda',
            img: '../images/burguerTeste.jpg',
            preco: '35.00',
            peso: '320g'
        }
    },
    terca: {
        comida01: {
            nome: 'Comida 01 Terça',
            img: '../images/burguerTeste.jpg',
            preco: '30.00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Terça',
            img: '../images/burguerTeste.jpg',
            preco: '20.00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Terça',
            img: '../images/burguerTeste.jpg',
            preco: '35.00',
            peso: '320g'
        }
    },
    quarta: {
        comida01: {
            nome: 'Comida 01 Quarta',
            img: '../images/burguerTeste.jpg',
            preco: '30.00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Quarta',
            img: '../images/burguerTeste.jpg',
            preco: '20.00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Quarta',
            img: '../images/burguerTeste.jpg',
            preco: '35.00',
            peso: '320g'
        }
    },
    quinta: {
        comida01: {
            nome: 'Comida 01 Quinta',
            img: '../images/burguerTeste.jpg',
            preco: '30.00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Quinta',
            img: '../images/burguerTeste.jpg',
            preco: '20.00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Quinta',
            img: '../images/burguerTeste.jpg',
            preco: '35.00',
            peso: '320g'
        }
    },
    sexta: {
        comida01: {
            nome: 'Comida 01 Sexta',
            img: '../images/burguerTeste.jpg',
            preco: '30.00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Sexta',
            img: '../images/burguerTeste.jpg',
            preco: '20.00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Sexta',
            img: '../images/burguerTeste.jpg',
            preco: '35.00',
            peso: '320g'
        }
    },
    bebidas: {
        bebida01: {
            nome: 'Bebida 01',
            img: '../images/bebidaTeste.png',
            preco: '5.00',
            peso: '200ml'
        },
        bebida02: {
            nome: 'Bebida 02',
            img: '../images/bebidaTeste.png',
            preco: '10.00',
            peso: '600ml'
        },
        bebida03: {
            nome: 'Bebida 03',
            img: '../images/bebidaTeste.png',
            preco: '15.00',
            peso: '1L'
        }
    },
}

function alteraBtnDiaSemana(button) {
    let atual = document.querySelectorAll('.activeSemana')
    atual.forEach((element) => {
        element.classList.remove('activeSemana')
    })
    button.classList.add("activeSemana")
    let tipoBtn = button.getAttribute('data-dia')

    atualizaCards(tipoBtn)
}

function atualizaCards(tipoBtn) {
    let cards = document.querySelector('#cards')
    cards.innerHTML = ""

    let objCard = comidas[tipoBtn]

    Object.keys(objCard).forEach((item, index) => {
        cards.innerHTML += 
        ` 
        <div class="card">
            <div class="cardImg">
                <img src=${objCard[item].img} alt="">
            </div>
            <div class="cardBody">
                <h3>${objCard[item].nome}</h3>
                <div class="precoQuantidade">
                    <p>R$${objCard[item].preco.replace('.', ',')}</p>
                    <div class="quantidade">
                        <button onclick="decrementClick(${index})">-</button>
                        <p class="num-contador" data-contador="1">1</p>
                        <button onclick="incrementClick(${index})">+</button>
                    </div>
                </div>
                <p><i class="fas fa-balance-scale"></i> ${objCard[item].peso} Unidade</p>
                <button class="btnComprar" onclick="addCarrinho('${objCard[item].nome}', '${objCard[item].preco}', '${objCard[item].img}', ${index})">Comprar</button>
            </div>
        </div>
        `
    })
}

function carregaDiaSemana() {
    let semana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
    let date = new Date()

    let diaAtual = semana[date.getDay()];

    if (diaAtual == 'domingo' || diaAtual == 'sabado') {
        diaAtual = 'segunda'
    }

    let listaDias = document.querySelectorAll('.dia')

    for (let item of listaDias) {
        let diaSemana = item.getAttribute('data-dia')

        if (diaSemana == diaAtual) {
            alteraBtnDiaSemana(item)
            break
        }
    }
}

function carregaPedidos() {
    let pedidos = JSON.parse(localStorage.getItem('pedidosCarrinho'))

    if (!pedidos) {
        return
    } else {
        atualizaCarrinho(pedidos)
    }
}

function incrementClick(classNumber) {
    let tagContador = document.querySelectorAll(".num-contador")[classNumber];

    let valorContador = Number(tagContador.getAttribute('data-contador'));

    if (valorContador == 0) {
        valorContador = 1
    } else {
        ++valorContador
    }

    updateDisplay(tagContador, valorContador)
}

function decrementClick(classNumber) {
    let tagContador = document.querySelectorAll(".num-contador")[classNumber];

    let valorContador = Number(tagContador.getAttribute('data-contador'));

    if (valorContador == 1) {
        valorContador = 1
    } else {
        --valorContador
    }

    updateDisplay(tagContador, valorContador)
}

function updateDisplay(tagContador, valorContador) {
    tagContador.setAttribute('data-contador', valorContador);

    tagContador.innerHTML = valorContador
}

