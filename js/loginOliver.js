let email = document.querySelector("#inputEmail");
let senha = document.querySelector("#inputSenha");

function validaEmail(email) {
    let valorEmail = email.value

    if (valorEmail.indexOf(' ') >= 0) {
        mostraErro(0, 'O email não pode conter espaços!')
    } else {
        let validacaoRegex = /\S+@\S+\.\S+/;
        let resultadoValidacao = validacaoRegex.test(valorEmail);

        if (resultadoValidacao == true) {
            mostraOk(0)
        } else {
            mostraErro(0, 'Email Inválido!')        
        }
    }
}

function validaSenha() {
    let valorSenha = senha.value

    console.log(valorSenha.indexOf(' ') >= 0)

    if (valorSenha.indexOf(' ') >= 0) {
        mostraErro(1, 'A senha não pode conter espaços!')
    } else {
        mostraOk(1)
    }
}

function mostraErro(campo, msgErro) {
  if (campo == 0) {
    resetaSimbolosValidacaoEmail()
    let simboloErro = document.querySelector("#erroEmail");
    let msgEmail = document.querySelector("#msgErroEmail");
    simboloErro.style.display = "block";
    msgEmail.style.display = "block";
    msgEmail.innerHTML = msgErro;
    email.className = 'inputEmail inputErro'
  } else if (campo == 1) {
      resetaSimbolosValidacaoSenha()
    let simboloErro = document.querySelector("#erroSenha");
    let msgSenha = document.querySelector("#msgErroSenha");
    simboloErro.style.display = "block";
    msgSenha.style.display = "block";
    msgSenha.innerHTML = msgErro;
    senha.className = 'inputSenha inputErro'
  }
}

function mostraOk(campo) {
    if (campo == 0) {
        resetaSimbolosValidacaoEmail()
        let simboloOk = document.querySelector("#okEmail");
        simboloOk.style.display = "block";
        email.className = 'inputEmail inputOk'
    } else if (campo == 1) {
        resetaSimbolosValidacaoSenha()
        let simboloOk = document.querySelector("#okSenha");
        simboloOk.style.display = "block";
        senha.className = 'inputSenha inputOk'
    }
}

function resetaSimbolosValidacaoEmail() {
    let simboloOkEmail = document.querySelector("#okEmail");
    let simboloErroEmail = document.querySelector("#erroEmail");
    let msgEmail = document.querySelector("#msgErroEmail");
    simboloOkEmail.style.display = 'none'
    simboloErroEmail.style.display = "none";
    msgEmail.style.display = "none";
}

function resetaSimbolosValidacaoSenha() {
    let simboloOkSenha = document.querySelector("#okSenha");
    let simboloErroSenha = document.querySelector("#erroSenha");
    let msgSenha = document.querySelector("#msgErroSenha");
    simboloOkSenha.style.display = 'none'
    simboloErroSenha.style.display = "none";
    msgSenha.style.display = "none";
}

function validaEmailEsqueciASenha() {
    let valorEmail = document.querySelector('#inputEmailEsqueciASenha').value

    if (valorEmail.indexOf(' ') >= 0) {
        alert('O email não pode conter espaços!')
    } else {
        let validacaoRegex = /\S+@\S+\.\S+/;
        let resultadoValidacao = validacaoRegex.test(valorEmail);

        if (resultadoValidacao == true) {
            alert('Email enviado com sucesso!')
        } else {
            alert('Email Inválido!')        
        }
    }
}