/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------

    Pour attacher un évènementà un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/


let divRouge = document.querySelector('#rouge');

divRouge.addEventListener('click',fdivRouge);
//l'ecouteur d'événement se décompose en deux argument
//1 l'action ici le clic
//2 le nom de la fonction ici fdivRouge

function fdivRouge() {
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.innerText = "GOLD";
}

function fp1(){
    alert('bonjour')
}
function fp2(){
    alert('bonjour')
}




//div orange


let divOrange = document.querySelector('#orange');
divOrange.addEventListener('dblclick',function(){
    divOrange.style.backgroundColor = "gold";
    divOrange.style.borderRadius = "50%";
    divOrange.innerText = "GOLD";
})



//div bleu
let divBlue = document.querySelector('#blue');
divBlue.addEventListener('mouseover',function(){
    divBlue.style.backgroundColor = "gold";
    divBlue.style.borderRadius = "50%";
    divBlue.innerText = "GOLD";
})




//div primary
let divPrimary = document.querySelector('#primary');
divPrimary.addEventListener('mouseout',function(){
    divPrimary.style.backgroundColor = "gold";
    divPrimary.style.borderRadius = "50%";
    divPrimary.innerText = "GOLD";
})




//div success
let divSuccess = document.querySelector('#success');
divSuccess.addEventListener('click',()=>{
    if (divSuccess.classList.contains('vert')) {
        //je verifie si la div contient la class vert dans la liste de classe
        divSuccess.classList.remove('vert')
        divSuccess.classList.add('gold')
        divSuccess.innerText = "GOLD";
    }else{
        divSuccess.classList.remove('gold')
        divSuccess.classList.add('vert')
        divSuccess.innerText = "#success";
    }
})


//img
let chat = document.querySelector('img')
chat.style.width = "300px"




//p du chat
lesP = document.querySelectorAll("div.col-6 p");

for (let i = 0; i < lesP.length; i++) {
    lesP[i].style.textDecoration = "underline";
    lesP[i].style.color = "red";
    lesP[i].style.fontWeight="bold";
}





lesP[0].addEventListener('click',()=>{
    chat.classList.add('hide')
})

lesP[1].addEventListener('click',()=>{
    chat.classList.remove('hide')
})

lesP[2].addEventListener('click',()=>{
    chat.classList.toggle('hide')
})