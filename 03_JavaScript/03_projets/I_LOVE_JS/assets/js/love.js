// loader
let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
    loader.classList.add('hideloader');
})
//  bouton no

let btnNo = document.querySelector('#btnNo');

btnNo.addEventListener('mouseover',()=>{
    let x = Math.random() * 80;
    let y = Math.random() * 80;
    btnNo.style.left = Math.round(x) + "rem";
    btnNo.style.top = Math.round(y) + "rem";
})