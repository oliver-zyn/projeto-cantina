let comidas = {
    segunda: {
        comida01: {
            nome: 'Comida 01 Segunda',
            img: '../images/burguerTeste.jpg',
            preco: 'R$30,00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Segunda',
            img: '../images/burguerTeste.jpg',
            preco: 'R$20,00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Segunda',
            img: '../images/burguerTeste.jpg',
            preco: 'R$35,00',
            peso: '320g'
        }
    },
    terca: {
        comida01: {
            nome: 'Comida 01 Terça',
            img: '../images/burguerTeste.jpg',
            preco: 'R$30,00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Terça',
            img: '../images/burguerTeste.jpg',
            preco: 'R$20,00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Terça',
            img: '../images/burguerTeste.jpg',
            preco: 'R$35,00',
            peso: '320g'
        }
    },
    quarta: {
        comida01: {
            nome: 'Comida 01 Quarta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$30,00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Quarta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$20,00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Quarta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$35,00',
            peso: '320g'
        }
    },
    quinta: {
        comida01: {
            nome: 'Comida 01 Quinta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$30,00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Quinta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$20,00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Quinta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$35,00',
            peso: '320g'
        }
    },
    sexta: {
        comida01: {
            nome: 'Comida 01 Sexta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$30,00',
            peso: '150g'
        },
        comida02: {
            nome: 'Comida 02 Sexta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$20,00',
            peso: '200g'
        },
        comida03: {
            nome: 'Comida 03 Sexta',
            img: '../images/burguerTeste.jpg',
            preco: 'R$35,00',
            peso: '320g'
        }
    },
    bebidas: {
        bebida01: {
            nome: 'Bebida 01',
            img: '../images/bebidaTeste.png',
            preco: 'R$5,00',
            peso: '200ml'
        },
        bebida02: {
            nome: 'Bebida 02',
            img: '../images/bebidaTeste.png',
            preco: 'R$10,00',
            peso: '600ml'
        },
        bebida03: {
            nome: 'Bebida 03',
            img: '../images/bebidaTeste.png',
            preco: 'R$15,00',
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
    counterVal = 0
    cards.innerHTML = ""

    let objCard = comidas[tipoBtn]

    let j = 0

    for (let i in objCard) {
        cards.innerHTML += 
        ` 
        <div class="card">
            <div class="cardImg">
                <img src=${objCard[i].img} alt="">
            </div>
            <div class="cardBody">
                <h3>${objCard[i].nome}</h3>
                <div class="precoQuantidade">
                    <p>${objCard[i].preco}</p>
                    <div class="quantidade">
                        <button onclick="decrementClick(${j})">-</button>
                        <p class="num-contador">0</p>
                        <button onclick="incrementClick(${j})">+</button>
                    </div>
                </div>
                <p><i class="fas fa-balance-scale"></i> ${objCard[i].peso} Unidade</p>
                <button class="btnComprar">Comprar</button>
            </div>
        </div>
        `
        j++
    }
}

function carregaDiaSemana() {
    let semana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
    let date = new Date();

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

let counterVal = 0

function incrementClick(classNumber) {
    updateDisplay(++counterVal, classNumber);
}

function decrementClick(classNumber) {

    if (counterVal <= 0) {
        counterVal = 0
        updateDisplay(0, classNumber);
    } else {
        updateDisplay(--counterVal, classNumber);
    }

}

function updateDisplay(val, classNumber) {
    document.querySelectorAll(".num-contador")[classNumber].innerHTML = val;
}

