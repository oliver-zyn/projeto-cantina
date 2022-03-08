
let oSimbolosEmail = {
    Erro: document.querySelector("#erroEmail"),
    Ok: document.querySelector("#okEmail"),
    msg: document.querySelector("#msgErroEmail")
}

let oSimbolosSenha = {
    Erro: document.querySelector("#erroSenha"),
    Ok: document.querySelector("#okSenha"),
    msg: document.querySelector("#msgErroSenha")
}

let oSimbolosConfirmaSenha = {
    Erro: document.querySelector("#erroConfirmSenha"),
    Ok: document.querySelector("#okConfirmSenha"),
    msg: document.querySelector("#msgErroConfirmSenha")
}

function validaEmail(tagEmail, bModalEsqueciSenha) {
    let valorEmail = tagEmail.value

    if (valorEmail.indexOf(' ') >= 0) {
        mostraErro(0, 'O email não pode conter espaços!')
    } else {
        let validacaoRegex = /\S+@\S+\.\S+/;
        let resultadoValidacao = validacaoRegex.test(valorEmail);

        if (!bModalEsqueciSenha) {
            if (resultadoValidacao) {
                mostraOk(oSimbolosEmail, tagEmail)
            } else {
                mostraErro(oSimbolosEmail, tagEmail, 'Email Inválido!')
            }
        } else {
            if (resultadoValidacao == true) {
                alert('Email enviado com sucesso!')
            } else {
                alert('Email Inválido!')
            }
        }
    }
}

function validaSenha(tagSenha) {
    let valorSenha = tagSenha.value

    if (valorSenha.indexOf(' ') >= 0) {
        mostraErro(oSimbolosSenha, tagSenha, 'A senha não pode conter espaços!')
    } else if (valorSenha.length < 8) {
        mostraErro(oSimbolosSenha, tagSenha, 'A senha deve ter no mínimo 8 dígitos!')
    } else {
        mostraOk(oSimbolosSenha, tagSenha)
    }
}


function validaSenhaIgual(tagConfirmaSenha, sIdCampoSenha) {
    let valorConfirmaSenha = tagConfirmaSenha.value
    let valorSenha = document.querySelector(`#${sIdCampoSenha}`).value

    if (valorConfirmaSenha !== valorSenha) {
        mostraErro(oSimbolosConfirmaSenha, tagConfirmaSenha, 'As senhas devem ser iguais!')
    } else {
        mostraOk(oSimbolosConfirmaSenha, tagConfirmaSenha)
    }
}

function mostraErro(objSimbolos, tagInput, msgErro) {
    resetaSimbolosValidacao(objSimbolos);
    objSimbolos.Erro.style.display = "block";
    objSimbolos.msg.style.display = "block";
    objSimbolos.msg.innerHTML = msgErro;
    tagInput.className = 'form-control inputErro';
}

function mostraOk(objSimbolos, tagInput) {
    resetaSimbolosValidacao(objSimbolos);
    objSimbolos.Ok.style.display = "block";
    tagInput.className = 'form-control inputOk';
}

function resetaSimbolosValidacao(objSimbolos) {
    for (let item in objSimbolos) {
        objSimbolos[item].style.display = 'none';
    }
}
