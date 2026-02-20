const lg = "http://localhost:3000/user/login"
const cd = "http://localhost:3000/user/register"



async function Login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
     
    if(email&&senha){
     try {
            const resposta = await fetch(`${lg}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            });
            if(resposta.ok){
                window.location.href = "dashboard.html";
            }
            const data = await resposta.json();
            alert(`Login Realizado Com Sucesso!`);
            alert(`Bem Vindo : ${data.nome}`)
        } catch (error) {
            console.error('Erro', error);
        }
    }
}

async function Cadastro() {
    const nome = document.getElementById('nome_usuario').value;

    // Captura o valor do input com id "tipo_pokemon"
    const idade = document.getElementById('idade').value;

    // Captura o valor do input com id "tem_evolucao"
    const email = document.getElementById('email').value;

    const senha = document.getElementById('senha').value;

    const telefone = document.getElementById('telefone').value;

    if (nome && idade && email && senha && telefone) {
        try {
            const resposta = await fetch(`${cd}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    idade,
                    email,
                    telefone,
                    senha
                })
            });
            const data = await resposta.json();
            alert(`Cadastrado Realizado Com sucesso!`);
            alert(`Bem Vindo : ${data.nome}`)
        } catch (error) {
            console.error('Erro', error);
        }
    }
}
