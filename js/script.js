let email = document.querySelector('#inputEmail')

let senha = {
    tag: document.querySelector('#inputPassword'),
    estado: false
}

function validaCampos() {
    if (email.value == '' || senha.tag.value == '') {
        alert('Preencha todos os campos!')
    } else {
        alert('Sucesso!')
    }
}

function mostraSenha() {
    if (senha.estado == false) {
        senha.tag.type = 'text'
        senha.estado = true
    } else {
        senha.tag.type = 'password'
        senha.estado = false
    }
}