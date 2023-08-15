function perguntas() {
    const perguntas = document.querySelectorAll('.perguntas-dt dt');

    function ativarPergunta(event) {
        const pergunta = event.currentTarget;
        const controls = pergunta.getAttribute("aria-controls");
        const resposta = document.getElementById(controls)


        resposta.classList.toggle('ativo');
        const ativa = resposta.classList.contains('ativo');
        pergunta.setAttribute('aria-expanded', ativa);
    }

    function eventosPerguntas(pergunta) {
        pergunta.addEventListener('click', ativarPergunta)
    }

    perguntas.forEach(eventosPerguntas);
}
perguntas();



