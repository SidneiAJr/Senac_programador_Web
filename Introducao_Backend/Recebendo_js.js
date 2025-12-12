const api_url = "http://localhost:3000/usuarios"
async function adicionarUsuario(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    try{
        const response = await fetch(api_url,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({nome,email,senha})
          }
    });
        const data = await response.text(); // Converte resposta para texto
    }catch(erro){
        console.error('Erro:', error);
    }
}
