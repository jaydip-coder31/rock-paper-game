let userscore = 0
let composcore = 0
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score")
const composcorepara = document.querySelector("#comp-score")

const gencomopchoice = () => {
    const option = [ "rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawgame = () =>{
    
    msg.innerText = "game was draw,play again!";
    msg.style.backgroundColor = "blue";
};
const showwinner = (userwin,userchoice,compochoice) =>{
  if(userwin){
    userscore++;
    userscorepara.innerText = userscore;

    msg.innerText = `you win  your ${userchoice} beats ${compochoice}`
    msg.style.backgroundColor = "green"
    
  }else{
    composcore++;
    composcorepara.innerText = userscore;

    msg.innerText = `you lose your ${compochoice} beats   ${userchoice}`;
    msg.style.backgroundColor = "red"
  }
}

const playgame = (userchoice) => {
    console.log("userchoice =",userchoice);
    const compochoice = gencomopchoice();
    console.log("compochoice =",compochoice);
    if(userchoice===compochoice){
        drawgame();
    }else{ let userwin = true;
    if(userchoice ==="rock"){
        userwin = compochoice ==="paper" ? false : true ;
    }else if(userchoice === "paper"){
        userwin = compochoice ==="scissors" ? false :true;
    }else{
        userwin= compochoice ==="rock"? false: true
    }
    showwinner(userwin,userchoice,compochoice);

    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",function(){
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);

    })
})