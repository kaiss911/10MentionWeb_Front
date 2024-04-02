let switchBox = document.querySelector('.switch');

let container = document.querySelector('.container-fluid');
let navbarchange = document.querySelector('.navbar-desktop');
let linkchange = document.querySelectorAll('.navbar-desktop a');
let btnchange = document.querySelector('.btn');
let icon = document.querySelector('.switch i');
let h1change = document.querySelector('h1');
let emoji = document.querySelector('.bloc-btn i');
let abonne = document.querySelector('.btn-abonner');

switchBox.addEventListener('click', changeMode);
emoji.addEventListener('click', changeEmoji);
abonne.addEventListener('click', changeabonne);

function changeMode (){
    container.classList.toggle('container-change');
    navbarchange.classList.toggle('nav-dark');
   
    for (let i = 0; i <linkchange.length; i++) {
        linkchange[i].classList.toggle('darklink');
    }

    btnchange.classList.toggle('btn-change');
    icon.classList.toggle('icone-change');

    if (icon.classList.contains('bi-sun-fill')) {
        icon.classList.remove('bi-sun-fill')
        icon.classList.add('bi-moon-fill')
    } else {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill')

    }

    
    switchBox.classList.toggle('switch-change');
    h1change.classList.toggle('h1-change');
    btnchange.classList.toggle('btn-dark');
}

function changeEmoji(){
    if (emoji.classList.contains('bi-emoji-neutral')) {
        emoji.classList.remove('bi-emoji-neutral')
        emoji.classList.add('bi-emoji-heart-eyes-fill')
    } else {
        emoji.classList.remove('bi-emoji-heart-eyes-fill');
        emoji.classList.add('bi-emoji-neutral')

    }
}

function changeabonne(){
    abonne.textContent="abonneeee";
    
}