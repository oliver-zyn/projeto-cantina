
let simbolosEmail = {
    emailErro: document.querySelector("#erroEmail"),
    emailOk: document.querySelector("#okEmail"),
    msgEmail: document.querySelector("#msgErroEmail")
}

let simbolosSenha = {
    senhaErro: document.querySelector("#erroSenha"),
    senhaOk: document.querySelector("#okSenha"),
    msgSenha: document.querySelector("#msgErroSenha")
}

function validaEmail(email) {
    let valorEmail = email.value

    if (valorEmail.indexOf(' ') >= 0) {
        mostraErro(0, 'O email não pode conter espaços!')
    } else {
        let validacaoRegex = /\S+@\S+\.\S+/;
        let resultadoValidacao = validacaoRegex.test(valorEmail);

        if (resultadoValidacao == true) {
            mostraOk(0, email)
        } else {
            mostraErro(0, email,'Email Inválido!')        
        }
    }
}

function validaSenha(senha) {
    let valorSenha = senha.value

    if (valorSenha.indexOf(' ') >= 0) {
        mostraErro(1, senha, 'A senha não pode conter espaços!')
    } else if (valorSenha.lenght < 8){
        mostraErro(1, senha, 'A senha deve ter no mínimo 8 dígitos!')
    } else {
        mostraOk(1, senha)
    }
}

function mostraErro(tipoCampo, input, msgErro) {
    if (tipoCampo == 0) {
      resetaSimbolosValidacaoEmail()
      simbolosEmail.emailErro.style.display = "block";
      simbolosEmail.msgEmail.style.display = "block";
      simbolosEmail.msgEmail.innerHTML = msgErro;
      input.className = 'form-control inputErro'
    } else if (tipoCampo == 1) {
      resetaSimbolosValidacaoSenha()
      simbolosSenha.senhaErro.style.display = "block";
      simbolosSenha.msgSenha.style.display = "block";
      simbolosSenha.msgSenha.innerHTML = msgErro;
      input.className = 'form-control inputErro'
    }
  }
  
  function mostraOk(campo, input) {
      if (campo == 0) {
          resetaSimbolosValidacaoEmail()
          simbolosEmail.emailOk.style.display = "block";
          input.className = 'form-control inputOk'
      } else if (campo == 1) {
          resetaSimbolosValidacaoSenha()
          simbolosSenha.senhaOk.style.display = "block";
          input.className = 'form-control inputOk'
      }
  }
  
  function resetaSimbolosValidacaoEmail() {
      for (let item in simbolosEmail) {
        simbolosEmail[item].style.display = 'none'
      }
  }
  
  function resetaSimbolosValidacaoSenha() {
      for(let item in simbolosSenha) {
          simbolosSenha[item].style.display = 'none'
      }
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