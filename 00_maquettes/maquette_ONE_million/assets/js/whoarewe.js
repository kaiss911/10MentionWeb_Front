let team1=document.getElementById('1');
let team2=document.getElementById('2');
let team3=document.getElementById('3');
let team4=document.getElementById('4');

team1.addEventListener("mouseover", ()=>{
    team1.classList.toggle('team1');
})
team1.addEventListener("mouseout", ()=>{
    team1.classList.toggle('team1');
})

team2.addEventListener("mouseover", ()=>{
    team2.classList.toggle('team2');
})
team2.addEventListener("mouseout", ()=>{
    team2.classList.toggle('team2');
})

team3.addEventListener("mouseover", ()=>{
    team3.classList.toggle('team3');
})
team3.addEventListener("mouseout", ()=>{
    team3.classList.toggle('team3');
})

team4.addEventListener("mouseover", ()=>{
    team4.classList.toggle('team4');
})
team4.addEventListener("mouseout", ()=>{
    team4.classList.toggle('team4');
})

