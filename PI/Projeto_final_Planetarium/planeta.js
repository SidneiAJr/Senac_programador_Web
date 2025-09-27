function VerificarPlaneta() {
    const valores = Array.from(document.querySelectorAll(".comp"))
                         .map(inp => parseFloat(inp.value));

    // Verifica se todos são números válidos e entre 0 e 100
    const validos = valores.every(v => !isNaN(v) && v >= 0 && v <= 100);

    if (!validos) {
        document.getElementById("res").textContent =
            "Erro: informe números de 0 a 100 para todos os elementos.";
        return;
    }

    // Soma total para saber se fecha 100%
    const soma = valores.reduce((a,b) => a + b, 0);

    let msg = `Composição do Planeta:\n${valores.join("% | ")}%`;
    msg += `\nTotal informado: ${soma.toFixed(1)}%`;

    // Regras simples de exemplo
    if (soma > 100) {
        msg += "\ A soma ultrapassa 100%! Corrija os valores.";
    } else if (valores[0] > 30) {
        msg += "\nObservação: Ferro acima de 30% → planeta bem denso!";
    }

    const res = document.getElementById("res");
    res.textContent = msg;           // usa textContent se quiser com \n
    // res.innerHTML = msg.replace(/\n/g,"<br>"); // ou usa innerHTML para quebrar em <br>
}
