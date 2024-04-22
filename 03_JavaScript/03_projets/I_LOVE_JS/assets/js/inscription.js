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

form.addEventListener('submit', (event)=>{
    event.preventDefault();// une methode utiliser dans les evenement Javascript pourempecher le comportement par défaut associé à un évenement de se produire.
    formVerif();
})
function formVerif(){
    usernamevalue = username.value;
    let emailvalue = password.value.trim();
    let passeword2Cvaluse = password2.value.trim();
}