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

        // Limpando a tabela antes de preencher
        const tabelaUsuarios = document.querySelector('#res tbody');
        tabelaUsuarios.innerHTML = '';  // Limpar dados anteriores da tabela

        // Iterando sobre os dados
        data.forEach(pokemon => {
            // Criar uma nova linha (tr)
            const tr = document.createElement('tr');

            // Criar células (td) para cada dado do Pokémon
            const tdNome = document.createElement('td');
            tdNome.innerText = pokemon.nome_pokemon;  // Nome do Pokémon

            const tdTipo = document.createElement('td');
            tdTipo.innerText = pokemon.tipo_pokemon;  // Tipo do Pokémon

            const tdEvolucao = document.createElement('td');
            tdEvolucao.innerText = pokemon.tem_evolucao;  // Se tem evolução

            // Adicionar as células à linha
            tr.appendChild(tdNome);
            tr.appendChild(tdTipo);
            tr.appendChild(tdEvolucao);

            // Adicionar a linha à tabela
            tabelaUsuarios.appendChild(tr);
        });

    } catch (error) {
        console.error('Erro ao obter dados', error);
    }
}

async function procurarPorId() {
    const id = document.getElementById('id').value;  // Pega o valor do ID que o usuário digitou
    if (!id) {
        alert("Por favor, insira um ID válido!");
        return;
    }

    try {
        const response = await fetch(`${api_url}/Listar/${id}`, {
            method: 'GET'
        });

        if (!response.ok) {
            const errorMessage = await response.text();  // Pega a mensagem de erro do servidor
            throw new Error(errorMessage);  // Lança o erro com a mensagem do servidor
        }

        // Converte a resposta para JSON
        const data = await response.json();
        if (data.length > 0) {
            const pokemon = data[0];  // Pega o primeiro Pokémon da resposta (se houver)
            const saida = document.getElementById('saida');
            // Exibe as informações de forma mais detalhada
            saida.innerHTML = `
                <h3>Pokémon Encontrado:</h3>
                <p><strong>ID:</strong> ${pokemon.id}</p><br>
                <p><strong>Nome:</strong> ${pokemon.nome_pokemon}</p><br>
                <p><strong>Tipo:</strong> ${pokemon.tipo_pokemon}</p><br>
                <p><strong>Tem Evolução?</strong> ${pokemon.tem_evolucao}</p><br>
            `;
        } else {
            alert('Pokémon não encontrado!');
        }


    } catch (error) {
        console.error('Erro:', error);  // Exibe o erro no console para depuração
        alert(error.message);  // Exibe a mensagem do erro para o usuário
    }
}


async function deletarPokemon() {
    const id = document.getElementById('id').value; // Pega o ID do Pokémon que você quer deletar
    try {
        const response = await fetch(`${api_url}/Deletar/${id}`, {
            method: 'DELETE'
        });

        const data = await response.text();
        alert(data);  // Mostra a resposta do servidor
    } catch (error) {
        console.error('Erro:', error);
    }
}
