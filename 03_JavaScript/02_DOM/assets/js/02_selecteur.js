
// Afin de modifier notre page HTML selon les intéractions d'un utilisateur, nous allons modifier notre DOM grâce a JavaScript.

//----------------------
    // SELECTIONNER NOS ELEMENTS
//----------------------

// Selection via TAG

let title = document.getElementsByTagName('h1');
console.log(title);

let lesP = document.getElementsByTagName('p'); // Ici on cherche, tous les paragraphes de notre page
// On récupère un Array (tableau) d'éléments. 
console.log(lesP);

// Grace a ma variable dans laquelle j'ai sélectionné tous les P, je peux viser un seul des éléments grâce à son index. Pour faire du CSS j'utilise la propriété 'style' suivi des mêùe déclaration que j'utilise en CS, avec du camelCase a la place de Kebab-case.
// La propriété 'style' permet d'acceder finement au style qui concerne un élément particulier.

lesP[0].style.backgroundColor = 'red';
lesP[0].style.color = 'white';
lesP[0].style.fontWeight = 'bold';

// Selection via ID

let titre = document.getElementById('Titre')

titre.style.backgroundColor = 'blue';
console.log(titre)

// Selectin via Classe
let selectClass = document.getElementsByClassName('selectClass')


// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

selectClass[1].style.backgroundColor = ('yellow');
console.log(selectClass[1]);
console.log(selectClass[1].innerHTML);

// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.
let change = document.getElementsByClassName('subtitle');
console.log(change[0])
change[0].innerHTML = ('<em>on change<em>')



// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.

//1er facon de faire
console.log(lesP);
for (let i = 0; i < lesP.length; i++) {
    lesP[i].style.textTransform = "uppercase";
}

//2eme facon de faire
// Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.
for (let p of lesP) {
    p.style.textTransform = "uppercase";
}

titre.style.backgroundColor = 'pink';
titre.style.border = "1px solid blue";

let div = document.querySelector('div');

div.style.border = "2px solid #000";


let query = document.querySelectorAll('selectClass');
for (let i = 0; i < query.length; i++) {
    console.log(query[i].innerHTML)
}

//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, plutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.
let rajout = document.querySelector(".bg-success p")
rajout.innerText = "je suis la";        



//CREATION D'UN NOUVEL ELEMENTS
let section = document.querySelector('section');
//pour creer un nouvel element nous utilisons la méthode createElements(), puis nous l'integrerons dans le noeud shouaiter
let nouveauParaFin = document.createElement('p');

nouveauParaFin.innerHTML = "<strong>Coucou je suis ton nouveau paragraphe à la fin de la section </strong>";
nouveauParaFin.style.color = "red"
section.append(nouveauParaFin);//append ()-> insert du contenue a la fin de la section // append () accepte tout les elements (balise ou string)


let nouveauParadebut = document.createElement('p');
nouveauParadebut.innerHTML = "<strong>Coucou je suis ton nouveau paragraphe au debut de la section </strong>";
nouveauParadebut.style.color = "green";
section.prepend(nouveauParadebut);//prepend() insert du contenu au debut de la section 

let parent = document.querySelector('main');
let jebouge = document.querySelector('h4');
let h2 = document.querySelector('subtitle');

parent.insertBefore(jebouge,h2)




//SUPRESSION D'UN ELEMENTS
// pour suprimmer un elements il faut deux paramètre
//-le parent 
//-l'element a suprimer

let ul = document.querySelector('ul')
let li = document.querySelector('ul :nth-child(2)')

ul.removeChild(li);

let baliseA = document.querySelector('a');
baliseA.setAttribute("href", "01_introduction.html");








// Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet.
// Ce lien sera de couleur blanche et non souligné.

let createA = document.createElement('a');
let pe = document.querySelector('div');
let h1 = document.querySelector('h1');

createA.insertBefore(pe,h1);




