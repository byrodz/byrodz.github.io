window.addEventListener('DOMContentLoaded', function() {
  // Verifica a largura do ecrã
  if (window.innerWidth < 1144) {
      // Mostra o aviso
      const warning = document.getElementById('mobile-warning');
      warning.classList.remove('hidden');
      
      // Aguarda 3 segundos e aplica o efeito de fade out
      setTimeout(() => {
          warning.classList.add('fade-out');
      }, 3000);
      
      // Aguarda mais 1 segundo para esconder completamente o aviso após o fade out
      setTimeout(() => {
          warning.style.display = 'none';
      }, 4000);
  }
});
