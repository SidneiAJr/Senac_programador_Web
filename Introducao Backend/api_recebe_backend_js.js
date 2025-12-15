const api_url = "http://localhost:3000";

async function adicionarUsuario() {
    const nome = document.getElementById('nome').value; // Obtém o valor do campo de nome
    const email = document.getElementById('email').value; // Obtém o valor do campo de email
    const senha = document.getElementById('senha').value; // Obtém o valor do campo de senha
    try{
     const response = await fetch(`${api_url}/criar`,{
        method: 'POST',
        headers:{
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome,email,senha})
     });
     const data = await response.text();
     alert(data);
    }catch(error){
          console.error('Erro',error);
    }
}

async function obterUsuarios() {
    try{
      const response = await fetch(`${api_url}/ler`);
      const data = await response.json();
      const listaUsuarios = document.getElementById('usuarios');
      listaUsuarios.innerHTML='';
     data.forEach(usuario => {
            const li = document.createElement('li');
            li.innerHTML = `${usuario.nome} - ${usuario.email} <button onclick="deletarUsuario(${usuario.id})">Deletar</button>`;
            listaUsuarios.appendChild(li);
        });
    }catch(error){
     console.error('Erro',error);
    }
}

async function deletarUsuario(id) {
    try{
        const response = await fetch(`${api_url}/deletar/${id}`,{
            method :'DELETE'
        });
        const data = await response.text();
        alert(data);
        obterUsuarios();
    }catch(error){
        console.error('Erro:', error);
    }
}
