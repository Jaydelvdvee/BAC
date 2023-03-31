const g = document.querySelector('#Kg');
const body = document.querySelector('#body');
const a = document.querySelector('#Glazen');
const m = document.querySelector('#Man');
const v = document.querySelector('#Vrouw');
const u = document.querySelector('#Uur');
const p = document.querySelector('.BAC');
var war = new Audio('./Images/LeakedMilitaryDocuments.mp3');
let t = 1;
const image = document.querySelector('.img');
let gendervalid = false;
let BAC = 0;   



let r = 0;  
let ag = 0;
let u2 = 0;
let g2 = 0;

function run(){
   t = 1;
      BAC = 0;   
    if (m.checked == true && v.checked == false){
      r = 0.7;
      t = 1;
    }
    else if (v.checked == true && m.checked == false){
      r = 0.5;
      t = 1;
    }
    else{
      t = Infinity;
    }
BAC = (a.value * 10 / (g.value * r) - (u.value - 0.5) * (g.value * 0.002)) * t;
p.textContent = BAC.toFixed(2);

if(a.value == "war thunder"){
   war.play();
   BAC = 222.49255636455276374
   
}
else{
   war.pause();
}

if (BAC <= 0.5){
   body.style.color = "white";
   body.style.backgroundColor = "green";
   image.setAttribute('src', './Images/prima.jpg');
}
else if (BAC <= 1.5){
   body.style.color = "black";
   body.style.backgroundColor = "yellowgreen";
   image.setAttribute('src', './Images/aangeschoten.jpg');
}
else if (BAC <= 3){
   body.style.color = "black";
   body.style.backgroundColor = "yellow";
   image.setAttribute('src', './Images/fat.jpg');
}
else if (BAC <= 4){
   body.style.color = "white";   
   body.style.backgroundColor = "orange";
   image.setAttribute('src', './Images/drunk.jpg');
}

else if (BAC == 222.49255636455276374){
   body.style.color = "black";
   body.style.backgroundColor = "white";
   image.setAttribute('src', './Images/ok.jpg');
}

else if (BAC < Infinity){
   body.style.color = "white";
   body.style.backgroundColor = "darkred";
   image.setAttribute('src', './Images/very.jpg');
}

else {
   body.style.color = "black";
   body.style.backgroundColor = "white";
   image.setAttribute('src', './Images/idk.png');
}
}

