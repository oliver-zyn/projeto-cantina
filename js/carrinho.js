let pedidos = []

function addCarrinho(nome, preco, img) {

    pedidos.push({nome, preco, img})

    let tagPedidos = document.querySelector('#pedidos');

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

    atualizaSubTotal()
}

function atualizaSubTotal() {
    let subTotal = document.querySelector('#subtotal')
    let total = 0
    console.log(pedidos);

    pedidos.forEach((element) => {
        let precoProduto = Number(element.preco)
        total += precoProduto
    })
    console.log(subTotal);

    subTotal.innerHTML = `<strong>Subtotal:</strong> R$ ${total}`
    total = 0
}