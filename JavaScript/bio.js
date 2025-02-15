document.addEventListener("DOMContentLoaded", function() {
    var aboutMeBox = document.getElementById('about-me-box');
    var aboutMeText = document.getElementById('about-me-text');
  
    aboutMeBox.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevent the event from bubbling up to the window
        if (!aboutMeBox.classList.contains('expanded')) {
            aboutMeBox.classList.add('expanded');
            aboutMeText.innerHTML = `
            Hi! I’m Rodrigo Catarino, a graphic and multimedia designer graduated by the Upper School of Arts and Design - Politécnico de Leiria in 2024.
            <br><br>I’ve always been passionate about anything art related, and since 2017, I’ve dedicated myself to multimedia design with the goal of growing and reinventing myself with each project. I love bringing fresh, innovative ideas to my projects and I make sure my work always reflects a positive and charismatic style. Currently, I’m focused on Motion Design, Graphic Design, and Multimedia Design, but I’m always open to new challenges of any kind.
            <br><br>Outside of design, I have a big passion for woodworking and voice acting, both dreams I hope to explore one day. And gaming, I’m a huge tech nerd.
   `; }
    });
  
    window.addEventListener('click', function(event) {
        if (aboutMeBox.classList.contains('expanded') && !aboutMeBox.contains(event.target)) {
            aboutMeBox.classList.remove('expanded');
            aboutMeText.innerHTML = `
                Click to read more...
            `;
        }
    });
  });
  