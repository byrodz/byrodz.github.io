// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Adiciona um evento de clique à imagem com a classe .logo
    document.querySelector('.logo').addEventListener('click', function() {
        
        // Rola a página de volta ao topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para um comportamento de rolagem suave
        });
    });

});
