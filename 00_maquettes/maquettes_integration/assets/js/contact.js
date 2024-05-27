let form = document.querySelector('#form');

let email = document.querySelector('#email');

let sujet = document.querySelector('#subject');
let mess = document.querySelector('#message');
let message = "";


form.addEventListener('submit', (event)=> {

    event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.
    let emailValue = email.value.trim();

    let donnee = [emailValue, sujet , mess];


    function setValidation(element, infos = null){

        let formControl = element.parentElement;
    
        let me = formControl.querySelector('small');
        if (infos != null) {
            me.innerText = infos;
            formControl.className = "form-control error";
        } else {
            formControl.className = "form-control success";
        }
    }



    if (donnee.includes("")) {
        Myalert.innerHTML='<p class="alert alert-danger text-center mt-3"role ="alert">Veuillez renseigner tout les champs</p>';
       } else {
        Myalert.innerHTML='<p class="alert  alert-success text-center mt-3" role="alert">Votre message a bien ete envoyer</p>';}

  // email verify
  let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
     if (!regexEmail.test(emailValue)) {
            message = 'Email n\est pas valide';  
            setValidation(email, message) ;
     }else {
            setValidation(email);
     }
})

