function VerificarPlaneta() {
    // Pega os valores convertidos em número
    let comp1 = parseFloat(document.getElementById("comp1").value) || 0;
    let comp2 = parseFloat(document.getElementById("comp2").value) || 0;
    let comp3 = parseFloat(document.getElementById("comp3").value) || 0;
    let comp4 = parseFloat(document.getElementById("comp4").value) || 0;
    let comp5 = parseFloat(document.getElementById("comp5").value) || 0;
    let comp6 = parseFloat(document.getElementById("comp6").value) || 0;
    let comp7 = parseFloat(document.getElementById("comp7").value) || 0;
    let comp8 = parseFloat(document.getElementById("comp8").value) || 0;

    let composicaoTotal = comp1+comp2+comp3+comp4+comp5+comp6+comp7+comp8;

    let ver1 = "";
    let ver2 = "";

    let elementos ={
        Ferro:comp1,
        enxofre:comp2,
        hidrogenio:comp3,
        helio:comp4,
        carbono:comp5,
        nitrogenio:comp6,
        oxigenio:comp7,
        agua:comp8
    }

    let elementoscomp = elementos.Ferro;
    let elementoscomp2 = elementos.enxofre;
    let elementoscomp3 = elementos.hidrogenio;
    let elementoscomp4 = elementos.helio;
    let elementoscomp5 = elementos.carbono;
    let elementoscomp6 = elementos.nitrogenio;
    let elementoscomp7 = elementos.oxigenio;
    let elementoscomp8 = elementos.agua;

    // índice de habitabilidade
    let habitabilidade = 0;
    if (elementoscomp7 > 15) habitabilidade += 30;
    if (elementoscomp6 > 20) habitabilidade += 30;
    if (elementoscomp8 > 10) habitabilidade += 30;
    if (elementoscomp3 + elementoscomp4 > 50) habitabilidade -= 5;


    // Status de composição
    if (composicaoTotal > 100) {
        ver1 = "Soma Total atingiu mais de 100%. Corrija os números.";
    } else if (composicaoTotal < 100) {
        ver1 = "Aviso: a soma é menor que 100%. Pode haver elementos faltando.";
    } else {
        ver1 = "Composição válida.";
    if (comp3 + comp4 > 50) {
        ver2 = `Planeta Classificado como Gigante Gasoso Similiar a Jupiter e Saturno ${elementoscomp3} Hidrogenio % ${elementoscomp4}Helio %`;
    } else if (comp1 > 30) {
        ver2 = "Planeta rochoso e Denso.";
    } else if (comp7 > 15 && comp6 > 20 && comp8 > 10) {
        ver2 = "Planeta com atmosfera rica em O₂ + N₂ + H₂O";
    } else {
        ver2 = "Planeta indefinido";
    }
    }

    // Junta tudo na saída
    document.getElementById("res").innerHTML = `
       Status da Composição: ${ver1} <br>
       Planeta: ${ver2} <br>
       Nivel de Habitabilidade ${habitabilidade} %
    `;
}
