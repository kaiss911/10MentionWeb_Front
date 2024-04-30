let switchBox = document.querySelector('.switch');
let container = document.querySelector('.container-fluid');
let navbarchange = document.querySelector('.navbar-desktop');
let linkchange = document.querySelectorAll('.navbar-desktop a');
let btnchange = document.querySelector('.btn');
let icon = document.querySelector('.switch i');

switchBox.addEventListener('click', changeMode);
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




// loader
let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideloader');
})





let afficheMdp = document.querySelector('.fa-eye-slash');
let password = document.querySelector('#password');


document.addEventListener

afficheMdp.addEventListener('click' , ()=>{
    switch (password.type) {
        case "password":
                password.setAttribute('type','text');
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
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');
let message = "";

form.addEventListener('submit', (event)=>{
    event.preventDefault();// une methode utiliser dans les evenement Javascript pour empecher le comportement par défaut associé à un évenement de se produire.
    formVerif();
    
})

function formVerif(){

    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    //username verify
    if (usernameValue == "") {// je verifie si le champs useurname est vide 
        // si c'est le cas je définit un message d'erreur approprier
        message = 'Username ne peut pas être vide';
        setError(username , message);
    }else if (!usernameValue.match(/^[a-zA-Z]+$/)) /* La méthode `match()` en JavaScript est utilisée pour faire
    correspondre une chaîne à une expression régulière. Lorsqu'il est
    appelé sur une chaîne, il renvoie un tableau contenant les
    correspondances, ou « null » si aucune correspondance n'est trouvée. */{
        message = 'Username n\'est pas valide , username doit contenir que des lettres';
        setError(username , message);
    }
    else{
        let lengthUsername = usernameValue.length;
        if (lengthUsername < 3) {
            message = "Username doit avoir au moins 3 caractéres";
            setError(username , message);

        } else {
            setSuccess(username);
        }
    }

    let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let regexPassWord = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
/**
     * 
     *  
     * ^: Indique le début de la chaîne.
        [a-z0-9._-]+: Correspond à une ou plusieurs occurrences de caractères minuscules de l'alphabet (a-z), chiffres (0-9), ou des caractères spéciaux (._-). Ce groupe représente la partie locale de l'adresse e-mail (avant le '@').
        @: Représente le caractère '@', qui sépare la partie locale du nom de domaine.
        [a-z0-9._-]{2,}: Correspond à une séquence d'au moins deux caractères parmi les caractères minuscules de l'alphabet, les chiffres, ou les caractères spéciaux (._-). Ceci représente le nom de domaine de niveau supérieur (TLD).
        \.: Représente le caractère point (".") qui sépare le nom de domaine de niveau supérieur du nom de domaine de premier niveau.
        [a-z]{2,4}: Correspond à une séquence de 2 à 4 caractères minuscules de l'alphabet, représentant l'extension du nom de domaine de premier niveau (par exemple, "com", "net", "org", etc.).
        $: Indique la fin de la chaîne.
*/
    if (emailValue == "") {// je verifie si le champs useurname est vide 
        // si c'est le cas je définit un message d'erreur approprier
        message = 'Email ne peut pas être vide';
        setError(email , message);
    }else if (!regexEmail.test(emailValue)) {
        message = 'Email n\'est pas valide';
        setError(email , message);
    }else{
        setSuccess(email)
    }

    //password verify

    if (passwordValue == "") { // je vérifie si le champ username est vide
        // si c'est le cas je définie un message d'erreur approprié
        message = 'Le mot de passe ne peut pas être vide ';  
        setError(password, message) ;

        }
        else if(!regexPassWord.test(passwordValue)) {

                message = 'Le mot de passe n\'est pas valide';  
                setError(password, message) ;

        } else {

                setSuccess(password);
        }
        // password2 verify
        if (password2Value == "") { // je vérifie si le champ username est vide
                // si c'est le cas je définie un message d'erreur approprié
                message = 'La confirmation du mot de passe ne peut pas être vide ';  
                setError(password2, message) ;

        }else if(password2Value != passwordValue){

                message = 'La confirmation du mot de passe ne correspondent pas  ';  
                setError(password2, message) ;

        }else {

                setSuccess(password2);

        }

}

//verifications

function setError(element, infos){

    let formControl = element.parentElement; // je stock le parent de l'élement qui contienr l'erreur (la div avec la classe form-control)
    let small = formControl.querySelector('small');
    //Ajout du message d'erreur
    small.innerText = infos;

    formControl.className = "form-control error";
    // formControl.classList.add('error');
    // formControl.classList.remove('success');

}

function setSuccess(element){

    let formControl = element.parentElement;
     formControl.className = "form-control success";
    // formControl.classList.add('success');
    // formControl.classList.remove('error');

}
let input = document.querySelector('input');


