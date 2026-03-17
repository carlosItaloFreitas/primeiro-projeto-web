const botaoTema = document.getElementById("toggle-switch-tema");

botaoTema.addEventListener("click", () => {
    document.documentElement.classList.toggle("modo-escuro");

    // IMPLEMENTAÇÃO DESCARTADA, DEVIDO UMA SOLUÇÃO MELHOR TER SIDO APLICADA

    // Atualiza ícone/texto do botão conforme o tema
    // if (document.documentElement.classList.contains("modo-escuro")) {
    //     botaoTema.textContent = "☀️";
    // } else {
    //     botaoTema.textContent = "🌙";
    // }
});
