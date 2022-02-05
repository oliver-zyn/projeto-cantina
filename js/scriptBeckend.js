function Api () {
  const URLHTTP = 'http://127.0.0.1:5000/loguin'
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  async function criaLoguin (nome, sobreNome, email, usuario, senha) {
      const request = await fetch(`${URLHTTP}/${nome}/${sobreNome}/${email}/${usuario}/${senha}`, {
  
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'      },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(nome, sobreNome, email, usuario, senha)
      });
      return await request.json();        
  } 
  async function verificaçãoDeLoguin (email, senha) {
      const request = await fetch(`${URLHTTP}/${email}/${senha}`, {
  
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'      },
        method: 'GET',
        mode: 'cors'
      });
      return await request.json(email, senha);        
  } 
  async function novaSenhaDeLoguin (email, usuario, novaSenha) {
      const request = await fetch(`${URLHTTP}/${email}/${usuario}/${novaSenha}`, {
  
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'      },
        method: 'PUT',
        mode: 'cors',
        body: JASON.stringify(email, usuario, novaSenha)
      });
      return await request.json();        
  } 
  return {
      criaLoguin,
      verificaçãoDeLoguin,
      novaSenhaDeLoguin
  }
}


function Store () {
  let store= [];

  function setAll(data) {
    store = [...data];
  }

  function getAll() {
    return store;
  }

  function set(data) {
    store.push(data);
  }

  function update(data) {
    store = store.map(d => String(d.id) === String(data.id) ? data : d)
  }

  function get (id) {
    return store.find(data => String(data.id) === String(id))
  }


  return {
    setAll,
    getAll,
    set,
    update,
    get,
  }
}


function LoguinStore () {

  const api = Api ();
  const store = Store();

  async function  criaLoguin (nome, sobreNome, email, usuario, senha) {
    const loguin = await api.criaLoguin(nome, sobreNome, email, usuario, senha);
    store.set(loguin);
  }

  async function verificaçãoDeLoguin (email, senha) {
    const loguin= await api.verificaçãoDeLoguin(email, senha);
    console.log(loguin)
    store.set(loguin);
  }

  async function novaSenhaDeLoguin(email, usuario, novaSenha) {
    const loguin = await api.novaSenhaDeLoguin(email, usuario, novaSenha);
    console.log(loguin)
    store.update(loguin);
  }

  return {
      criaLoguin,
      verificaçãoDeLoguin,
      novaSenhaDeLoguin
  }
}

loguinStore = LoguinStore();

async function tryCriaLoguin (nome, sobreNome, email, usuario, senha) {
  try {
    await loguinStore.criaLoguin(nome, sobreNome, email, usuario, senha);
  } catch (error) {
    console.log(error)
  }  
}

async function novaSenhaDeLoguin (email, usuario, novaSenha) {
  try {
    await loguinStore.novaSenhaDeLoguin  (email, usuario, novaSenha);
  } catch (error) {
    console.log(error)
  }  
}

async function verificaçãoDeLoguin (email, senha) {
  try {
    await loguinStore.verificaçãoDeLoguin(email, senha);
  } catch (error) {
    console.log(error)
  }  
}

function pegaValoresInput() {
  let nome = inputNome.value
  let sobreNome = inputSobrenome.value 
  let email = inputEmail.value
  let usuario = inputUsuario.value
  let senha = inputSenha.value

  console.log(nome)
}

function cadastrarUsuario () {

  let nome = inputNome.value
  let sobreNome = inputSobrenome.value 
  let email = inputEmail.value
  let usuario = inputUsuario.value
  let senha = inputSenha.value

  console.log(nome)
  console.log(sobreNome)
  console.log(email)
  console.log(usuario)
  console.log(senha)

  tryCriaLoguin (nome, sobreNome, email, usuario, senha)
}




// let nome = inputNome.value
// let sobreNome = inputSobrenome.value 
// let email = inputEmail.value
// let usuario = inputUsuario.value
// let senha = inputSenha.value
