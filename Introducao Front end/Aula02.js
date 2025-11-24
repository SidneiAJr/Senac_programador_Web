// Função para esconder ou mostrar um elemento
function esconder() {
    let documento = document.getElementById("colorBox");

    if (documento.style.display === "none") {
        documento.style.display = "block"; // Mostrar
    } else {
        documento.style.display = "none"; // Esconder
    }
}

// Seleciona a <div> com a classe 'b' (e id 'colorBox')
let colorBox = document.getElementById("colorBox");

// Adiciona o evento 'mouseover' para mudar a cor para azul
colorBox.addEventListener("mouseover", function() {
    colorBox.style.backgroundColor = "blue";
});

// Adiciona o evento 'mouseout' para voltar para a cor cinza
colorBox.addEventListener("mouseout", function() {
    colorBox.style.backgroundColor = "gray";
});

// Seleciona o input e o parágrafo
let inputTexto = document.getElementById('inputTexto');
let textoMostrar = document.getElementById('textoMostrar');

// Adiciona o evento 'keyup' ao input
inputTexto.addEventListener('keyup', function() {
    // Atualiza o conteúdo do parágrafo com o texto do input
    textoMostrar.textContent = inputTexto.value;
});
