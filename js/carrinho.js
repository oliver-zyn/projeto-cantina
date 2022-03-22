let pedidos = []

function addCarrinho(nome, preco, img, index) {

    let contador = document.querySelectorAll('.num-contador')[index]

    let valorContador = Number(contador.getAttribute('data-contador')) - 1

    let tagPedidos = document.querySelector('#pedidos');

    for(let i = 0; i <= valorContador; i++) {
        tagPedidos.innerHTML += `
                        <div class="pedido">
                            <div class="pedido--img">
                                <img src=${img} alt=${nome}>
                            </div>
                            <div class="pedido--texto">
                                <h2>${nome}</h2>
                                <p>${preco}</p>
                            </div>
                        </div>
                        `
        
        pedidos.push({nome, preco, img})
    }

    atualizaSubTotal(pedidos)
    atualizaNotificacao(pedidos.length)
    gravaPedidos(pedidos)
}

function atualizaCarrinho(pedidosCarrinho) {
    let tagPedidos = document.querySelector('#pedidos');

    for(let item of pedidosCarrinho) {
        tagPedidos.innerHTML += `
                        <div class="pedido">
                            <div class="pedido--img">
                                <img src=${item.img} alt=${item.nome}>
                            </div>
                            <div class="pedido--texto">
                                <h2>${item.nome}</h2>
                                <p>${item.preco}</p>
                            </div>
                        </div>
                        `
        pedidos.push(item)
    }

    atualizaNotificacao(pedidosCarrinho.length)
    atualizaSubTotal(pedidosCarrinho)

    console.log(pedidosCarrinho)
    console.log(pedidos)
}

function atualizaSubTotal(pedidos) {
    let subTotal = document.querySelector('#subtotal')
    let total = 0

    pedidos.forEach((element) => {
        let precoProduto = Number(element.preco)
        total += precoProduto
    })

    subTotal.innerHTML = `<strong>Subtotal:</strong> R$ ${total}`
    total = 0
}

function atualizaNotificacao(index) {
    let notf = document.querySelector('#notificacao')

    notf.innerHTML = index
}

function gravaPedidos(pedidos) {
    localStorage.setItem('pedidosCarrinho', JSON.stringify(pedidos))
}