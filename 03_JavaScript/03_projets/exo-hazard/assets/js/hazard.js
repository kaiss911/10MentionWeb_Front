let oui = document.getElementById('ui');
let non = document.getElementById('no');


oui.addEventListener("click",()=>{
  let x = Math.random() *400;
  let y = Math.random() *400;

  oui.style.top = x + 'px';
  oui.style.left = y + 'px';
})


non.addEventListener("click",()=>{
    alert("NON");
})