// loader
let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideloader');
})





let afficheMdp = document.querySelector('.fa-eye-slash');
let password = document.querySelector('password');




afficheMdp.addEventListener('click' , ()=>{
    switch (password.type) {
        case "password":
                password.setAttribute('type','text')
                password.type="text";
                afficheMdp.classList.replace('fa-eye-slash','fa-eye')
            break;

        default:
                password.setAttribute('type','password');
                password.type="password";
                afficheMdp.classList.replace('fa-eye','fa-eye-slash')
            break;
    }
})
// Validation du formulaire
let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('email');
let password2 = document.querySelector('#password2');
let message = "";

form.addEventListener('submit', (event)=>{
    event.preventDefault();// une methode utiliser dans les evenement Javascript pour empecher le comportement par défaut associé à un évenement de se produire.
    formVerif();
})

function formVerif(){
    //
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2CValue = password2.value.trim();

    //username verify
    if (usernameValue == "") {// je verifie si le champs useurname est vide 
        // si c'est le cas je définit un message d'erreur approprier
        message = 'Username ne peut pas être vide'
    }
}

function setError(element, infos) {
    let formControl = element.parentElement; //je stock le parent de l'element qui contient l'erreur (la div avec la classe form-control)
    let small = formControl.querySelector('small')
}