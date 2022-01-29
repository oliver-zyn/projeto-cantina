function api (){
    const baseURL = 'http://127.0.0.1:5000/loguin'
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  
    const url = `${baseURL}`;
  // 
    async function createLoguin (email, senha) {
        const request = await fetch(`${url}/${email}/${senha}`, {
    
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'      },
          method: 'POST',
          mode: 'cors'
        });
        return await request.json();        
    } 
    async function verificaçãoDeLoguin (email, senha) {
        const request = await fetch(`${url}/${email}/${senha}`, {
    
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'      },
          method: 'GET',
          mode: 'cors'
        });
        return await request.json();        
    } 
    async function novaSenhaDeLoguin (email, senha) {
        const request = await fetch(`${url}/${email}/${senha}`, {
    
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'      },
          method: 'PUT',
          mode: 'cors'
        });
        return await request.json();        
    } 
    return {
        createLoguin,
        verificaçãoDeLoguin,
        novaSenhaDeLoguin
    }
}


function Store () {
    let store = [];
  
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

    const api = api ();
    const store = Store();
  
    async function  createLoguin (email, senha) {
      const loguin = await api.createLoguin(email, senha);
      console.log(loguin)
      store.setAll(loguin);
    }
  
    async function verificaçãoDeLoguin (email, senha) {
      const loguin= await api.verificaçãoDeLoguin;
      console.log(loguin)
      store.setAll(loguin);
    }
  
    async function novaSenhaDeLoguin(email, senha) {
      const loguin = await api.novaSenhaDeLoguin();
      console.log(loguin)
      store.update(loguin);
    }
  
    return {
        createLoguin,
        verificaçãoDeLoguin,
        novaSenhaDeLoguin
    }
  }


  async function tryCreateloguin (email, senha) {
    try {
      await LoguinStore.createLoguin(email, senha);
    } catch (error) {
      console.log(error)
    }  
  }

  async function tryverificaçãoDeLoguin (email, senha) {
    try {
      await LoguinStore.verificaçãoDeLoguin  (email, senha);
    } catch (error) {
      console.log(error)
    }  
  }

  async function tryCreateloguin (email, senha) {
    try {
      await LoguinStore.createLoguin(email, senha);
    } catch (error) {
      console.log(error)
    }  
  }