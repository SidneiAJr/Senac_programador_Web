const url = "https://pokeapi.co/api/v2/pokemon"

async function procurarNome() {
    const nomePokemon = document.getElementById('nome').value.trim().toLowerCase()
    const idPokemon = document.getElementById('idPokemon').value.trim()

    const busca = idPokemon || nomePokemon;

   try{
    if (!busca) {
        alert("Digite o nome OU o ID do Pokémon")
        return
    }
    const resposta = await fetch(`${url}/${busca}`)
    const dados = await resposta.json()
    const tipos = dados.types.map(t => t.type.name).join(" / ")
    let saida = document.getElementById("img");
    saida.innerHTML=`ID Pokemom: ${dados.id}<br>Nome Pokemons: <br>${dados.name}<br>Tipo Pokemons: ${tipos}<br> `; 

   }catch(erro){
       alert("Pokemon Não encontrado ⚠️")
       console.error(erro)
   }
    

    
}
