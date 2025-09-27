function Vida() {
    let gravidade = Number(document.getElementById("gravidade").value);
    let distanciaEstrela = Number(document.getElementById("distanciaEstrela").value);
    let temperatura = Number(document.getElementById("temperatura").value);
    let agua = Number(document.getElementById("agua").value);
    let oxigenio = Number(document.getElementById("oxigenio").value);
    let nitrogenio = Number(document.getElementById("nitrogenio").value);
    let campoMagnetico = Number(document.getElementById("campoMagnetico").value);
    let estrela = document.getElementById("estrela").value;
    const AU = 149600000; // km AU-> Unidade Astronomica
    let quantgravidade;
    let verificardistancia;
    let verificacampo;
    let verificatemp;
    let verificagravidade;

    if (isNaN(gravidade) || isNaN(distanciaEstrela) || isNaN(temperatura) || isNaN(agua) || isNaN(oxigenio) || isNaN(nitrogenio) || isNaN(campoMagnetico) || estrela === "") {
        "Por favor Informe os Valores Solicitados";
    } else {
        if (gravidade > 100) {
            quantgravidade = gravidade / 9.8
            verificagravidade = `Quantidade de Gravidade Comparada a Terra ${quantgravidade.toFixed(0)} G Esmagamento`
        } else if (gravidade <= 30) {
            verificagravidade = quantgravidade = gravidade / 9.8
            verificagravidade = `Quantidade de Gravidade Comparada a Terra ${quantgravidade.toFixed(0)} G`
        } else if (gravidade < 9.8) {
            quantgravidade = gravidade / 9.8
            verificagravidade = `Quantidade de Gravidade Comparada a Terra ${quantgravidade.toFixed(0)} G`
        }
        if (estrela === "estavel") {
            verificardistancia = distanciaEstrela / AU
            verificardistancia = `Distancia da Estrela ${verificardistancia.toFixed(1)}AU`
        } else if (estrela === "instavel") {
            verificardistancia = distanciaEstrela / AU
            verificardistancia = `Distancia da Estrela ${verificardistancia.toFixed(1)}AU`
        } else if (estrela === "curtavida") {
            verificardistancia = distanciaEstrela / AU
            verificardistancia = `Distancia da Estrela ${verificardistancia.toFixed(1)}AU`
        } else if (estrela === "estrelanetrons") {
            verificardistancia = distanciaEstrela / AU
            verificardistancia = `Distancia da Estrela ${verificardistancia.toFixed(1)}AU`
        }
        else if (estrela === "Gargantua") {
            verificardistancia = AU / distanciaEstrela
            document.getElementById("res").innerHTML = `Distancia da Estrela ${verificardistancia.toFixed(2)}AU`
        }
        if (temperatura > 500) {
            verificatemp = `Temperatura ${temperatura} °C — Muito acima do limite, tipo Vênus.`;
        } else if (temperatura > 100) {
            verificatemp = `Temperatura ${temperatura} °C — Quente demais, água não fica líquida.`;
        } else if (temperatura > 50) {
            verificatemp = `Temperatura ${temperatura} °C — Dentro da zona habitável.`;
        } else if (temperatura >= 0) {
            verificatemp = `Temperatura ${temperatura} °C — Muito fria, água congelada.`;
        } else {
            verificatemp = `Temperatura ${temperatura} °C — Condições marginais.`;
        }

        // Campo magnético (comparando com a Terra 25–65 µT)
        if (campoMagnetico < 25) {
            verificacampo = `Campo Magnético fraco (${campoMagnetico} µT) pode não proteger contra radiação solar.<br>`;
        } else if (campoMagnetico > 65) {
            verificacampo = `Campo Magnético muito forte (${campoMagnetico} µT)  fora do padrão terrestre.<br>`;
        } else {
            verificacampo = `Campo Magnético adequado (${campoMagnetico} µT) <br>`;
        }

        
    }



    let saida1 = document.getElementById("res").innerHTML =
    `
    =================Relatorio Planetario==================<br>
     Gravidade: ${verificagravidade} <br>
     ${verificardistancia}<br>
     ${verificatemp}<br>
     Campo Magnetico: ${verificacampo}
    ==========================================================

    `

}
