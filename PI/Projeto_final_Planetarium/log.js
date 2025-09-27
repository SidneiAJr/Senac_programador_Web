function calcular(){
    const gravidade = Number(document.getElementById("gravidade").value);
    const raio = Number(document.getElementById("raio").value);

    if (!isNaN(gravidade) && gravidade > 0 &&
        !isNaN(raio) && raio > 0) {

        const v = Math.sqrt(2 * gravidade * raio);
        document.getElementById("res").innerHTML =
            `Velocidade de Escape é ${v.toFixed(2)} m/s`;
    } else {
        document.getElementById("res").innerHTML =
            "Favor informar números maiores que 0.";
    }
}
