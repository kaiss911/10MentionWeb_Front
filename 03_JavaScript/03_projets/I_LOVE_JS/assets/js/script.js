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
    if (abonne.innerText === "Abonnez-vous") {
        abonne.innerHTML ='abonneeee  <i class="bi bi-emoji-neutral"></i>';
        
    } else{
        abonne.innerText="Abonnez-vous";
    }
}
let btnCoukies = document.querySelector('.btn-success')
let cookies = document.querySelector('.cookies');

btnCoukies.addEventListener('click',()=>{
    cookies.style.opacity="0";
    // cookies.style.bottom='auto'
})


h1change.addEventListener('click',()=>{
    h1change.style.opacity="0";
    
})
// caroussel
let left = document.querySelector('.left');
let automatic = document.querySelector('.automatic');
let right = document.querySelector('.right');
let img = document.querySelector('img');
let automaticIcon = document.querySelector('.automatic i');


let i = 1;


right.addEventListener('click', carrousel);
function carrousel (){
    i++;
    img.setAttribute('src', `assets/img/${i}.jpg`);
    
    if (i==7) {
        i=1;
        img.setAttribute('src', `assets/img/${i}.jpg`);
    }}



left.addEventListener('click',()=>{
    i--;
    
    if (i==0) {
        i=6;
        img.setAttribute('src', `assets/img/${i}.jpg`);
    }
    img.setAttribute('src', `assets/img/${i}.jpg`);

})






let statut = null; // Initialisation d'une variable pour stocker l'état du slider (lecture ou pause)
automatic.addEventListener('click', ()=>{

    // Inversion de la classe 'bi-pause-fill' sur l'élément automaticIcon à chaque clic
    automaticIcon.classList.toggle('bi-pause-fill');

    // Vérification de l'état actuel du slider
    if (statut == null ) {
         // Si le slider est en pause
        // Activation du mode lecture : exécution de la fonction carrousel toutes les 1500 millisecondes (1.5 secondes)

        statut = window.setInterval(carrousel, 1500);  //setInterval est utilisé pour exécuter une fonction à intervalles réguliers
  
    } else {
        // Si le slider est en lecture
        // Désactivation du mode lecture : arrêt de l'exécution de la fonction carrousel à intervalles réguliers
        window.clearInterval(statut);

        //clearInterval est utilisé pour arrêter l'exécution de cette fonction à intervalles réguliers en utilisant l'identifiant de l'intervalle retourné par setInterval.


        statut = null; // Réinitialisation de la variable statut à null pour indiquer que le slider est en pause
        
    }
})

// loader
let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideloader');
})

