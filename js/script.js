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


if (window.SimpleAnime) {
    new SimpleAnime();
}



function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

}
initScrollSuave();


function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(sectionTop < 0) {
                    section.classList.add('ativo');
                }
            })
        }

        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();