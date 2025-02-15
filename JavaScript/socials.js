document.addEventListener('DOMContentLoaded', function() {
    const clickableWord = document.querySelector('.socials');
    const extraWord = document.getElementById('linkedin');
    const extraWord2 = document.getElementById('linkedin2');
    const extraWord3 = document.getElementById('behance');
    const extraWord4 = document.getElementById('behance2');
    const socialsLink = document.getElementById('socials-link');

    let clicked = false;

    clickableWord.addEventListener('click', function(event) {
        if (!clicked) {
            event.preventDefault(); // prevent the default link behavior only if not clicked
            this.textContent = 'instagram'; // change the text to 'instagram'
            extraWord.style.display = 'block'; // show LinkedIn
            extraWord2.style.display = 'flex'; 
            extraWord3.style.display = 'block'; // show Behance
            extraWord4.style.display = 'flex'; 
            clicked = true;
        }
    });

    document.addEventListener('click', function(event) {
        if (clicked && !clickableWord.contains(event.target) && !extraWord2.contains(event.target) && !extraWord4.contains(event.target)) {
            clickableWord.textContent = 'socials'; // change the text back to 'socials'
            extraWord.style.display = 'none'; // hide LinkedIn
            extraWord2.style.display = 'none'; 
            extraWord3.style.display = 'none'; // hide Behance
            extraWord4.style.display = 'none'; 
            clicked = false;
        }
    });

    socialsLink.addEventListener('click', function(event) {
        if (!clicked) {
            event.preventDefault(); // prevent the default link behavior only if not clicked
        }
    });
});
