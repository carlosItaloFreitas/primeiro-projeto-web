let bgInterativo = document.querySelector(".grupo-itens-simulacao");
let simulacaoAtiva = document.querySelector(".botao-simular");
let resultadoAtivo = document.querySelector(".botao-resultado");

simulacaoAtiva.onclick = () => {
    bgInterativo.classList.remove("resultado-ativo");
    bgInterativo.classList.add("simulacao-ativa");
}

resultadoAtivo.onclick = () => {
    bgInterativo.classList.remove("simulacao-ativa");
    bgInterativo.classList.add("resultado-ativo");
}