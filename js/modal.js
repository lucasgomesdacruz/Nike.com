// Função para exibir o modal quando a página for carregada
window.addEventListener('load', function() {
    exibirModal();
});

// Função para exibir o modal
function exibirModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}