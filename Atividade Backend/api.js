const api_url = "http://localhost:3000";

async function addpok() {
    const nome_pokemon = document.getElementById('nome_pokemon').value;
    const tipo_pokemon = document.getElementById('tipo_pokemon').value;
    const tem_evolucao = document.getElementById('tem_evolucao').value;

    try {
        const response = await fetch(`${api_url}/Inserir`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome_pokemon, tipo_pokemon, tem_evolucao })
        });

        const data = await response.text();
        alert(data);  // Exibe a resposta do servidor

    } catch (error) {
        console.error('Erro', error);
    }
}
async function obterUsuarios() {
    try {
        const response = await fetch(`${api_url}/Listar`);

        // Verifique se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Obtenha a resposta como texto para debug
        const textResponse = await response.text();
        console.log(textResponse);  // Verifique a resposta no console

        // Tente fazer o parse da resposta
        const data = JSON.parse(textResponse);

        // Limpando a lista de resultados
        const listaUsuarios = document.getElementById('res');
        listaUsuarios.innerHTML = '';

        // Iterando sobre os dados
        data.forEach(pokemon => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${pokemon.nome_pokemon} - ${pokemon.tipo_pokemon}
                <button onclick="deletarUsuario(${pokemon.id})">
                    Deletar
                </button>
            `;
            listaUsuarios.appendChild(li);
        });

    } catch (error) {
        console.error('Erro ao obter dados', error);
    }
}
