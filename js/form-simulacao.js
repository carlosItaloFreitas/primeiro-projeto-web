document.getElementById("formulario-simulacao").addEventListener("submit", function(e) {
    e.preventDefault();

    const idade = +document.getElementById("idade").value;
    const peso = +document.getElementById("peso").value;
    const altura = +document.getElementById("altura").value;
    const imc = peso / (altura * altura);
    const fator = getFatorComorbidade(imc);

    const planos = ["Basic", "Standard", "Premium"];
    const Hapvida = [
        100 + (idade * 10) + (imc * 8), // Basic
        200 + (idade * 12) + (imc * 10), // Standard
        300 + (idade * 15) + (imc * 12) // Premium 
    ];

    const Unimed = [
        100 + (fator * 5) + (imc * 8), // Básico
        200 + (fator * 10) + (imc * 12), // Standard
        300 + (fator * 15) + (imc * 15) // Premium 
    ];

    const tbody = document.querySelector("#tabela-resultado tbody");
    tbody.innerHTML = "";
    planos.forEach((plano, i) => {
        const a = Hapvida[i].toFixed(2);
        const b = Unimed[i].toFixed(2);
        const melhor = a < b ? "Hapvida" : (b < a ? "Unimed" : "Empate");

        tbody.innerHTML += `
          <tr>
            <td>${plano}</td>
            <td>R$ ${a}</td>
            <td>R$ ${b}</td>
            <td><strong>${melhor}</strong></td>
          </tr>`;
    });

    document.getElementById("tabela-resultado").style.display = "block";
});

function getFatorComorbidade(imc) {
    if (imc < 18.5) return 10;
    if (imc < 25) return 1;
    if (imc < 30) return 6;
    if (imc < 35) return 10;
    if (imc < 40) return 20;
    return 30;
}

// COMANDO PARA LIMPAR O FORMULÁRIO

document.getElementById("botao-simular").addEventListener("click", function () {
    document.getElementById("formulario-simulacao").reset();
    // document.getElementById("tabela-resultado").reset(); // este trecho não obteve exito na implementação
});


// COMANDO PARA ATUALIZAR A PÁGINA, resetando O FORMULÁRIO E A TABELA
    // implementação que resouvia parcialmente o desafio requerido, deixando outros transtornos

// document.getElementById("botao-simular").addEventListener("click", function () {
//     location.reload();
// });