function calcular(){
    const G = 6.674e-11; // constante gravitacional
    const massa = Number(document.getElementById("massa").value);
    const raio  = Number(document.getElementById("raio").value);

    if (!isNaN(massa) && massa > 0 &&
        !isNaN(raio)  && raio  > 0) {

        const g = (G * massa) / (raio * raio);
        document.getElementById("res").innerHTML =
            `Gravidade superficial ≈ ${g.toFixed(2)} m/s²`;
    } else {
        document.getElementById("res").innerHTML =
            "Informe massa e raio maiores que 0.";
    }
}
