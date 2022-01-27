function api (){
    const baseURL = 'http://127.0.0.1:5000/server'
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  
    const url = `${baseURL}`;
  // 
    async function createLoguin (email, senha) {
        const request = await fetch(url, {
    
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'      },
          method: 'POST',
          mode: 'cors'
        });
        return await request.json();        
    } 
    async function verificaçãoDeLoguin (email, senha) {
        const request = await fetch(url, {
    
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'      },
          method: 'GET',
          mode: 'cors'
        });
        return await request.json();        
    } 
    async function novaSenhaDeLoguin (email, senha) {
        const request = await fetch(url, {
    
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


  function ProbeStore () {

    const api = api ();
    const store = Store();
  
    async function  createLoguin (email, senha) {
      const loguin = await api.createLoguin(email, senha);
      store.setAll(loguin);
      console.log(loguin);
    }
  
    async function verificaçãoDeLoguin (email, senha) {
      const loguin= await api.verificaçãoDeLoguin;
      store.setAll(loguin);
    }
  
    async function novaSenhaDeLoguin(email, senha) {
      const loguin = await api.novaSenhaDeLoguin();
      store.update(loguin);
    }
  
    return {
        createLoguin,
        verificaçãoDeLoguin,
        novaSenhaDeLoguin
    }
  }