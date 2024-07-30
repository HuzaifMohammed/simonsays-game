let gameSeq = [];
let userSeq = [];
let started =false;
let level=0;
let h2 = document.querySelector("h2");
let btns =["yellow","red","green","purple"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranIndex = Math.floor(Math.random()*3);
    let ranColor = btns[ranIndex];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);

    btnFlash(ranBtn);
}
function checkAns(idx){
    //console.log(`current level ${level}`);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your Score Was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click",btnPress); 
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}