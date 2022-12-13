let userChoices = document.querySelectorAll("#user-choice .choice");
let userScore = parseInt(document.getElementById("user-score").innerText);
let computerScore = parseInt(document.getElementById("computer-score").innerText);

function getRandom(){

let random = document.querySelectorAll("#computer-choice .choice")[Math.floor(Math.random()*3)];

document.querySelectorAll("#computer-choice .choice")[0].style.border = "dashed 2px black";
    document.querySelectorAll("#computer-choice .choice")[1].style.border = "dashed 2px black";
    document.querySelectorAll("#computer-choice .choice")[2].style.border = "dashed 2px black";

random.style.border = "red 3px solid";
setTimeout(() => random.style.border = "black 2px dashed", 2000);
return random.innerText.toLowerCase();
}

function getResult(userChoice, computerChoice){
    if(userChoice === computerChoice){
    } else if((userChoice === "pierre" && computerChoice === "feuille") ||
        (userChoice === "feuille" && computerChoice === "pierre")||
        (userChoice === "ciseaux" && computerChoice === "feuille")
    ){
        document.getElementById("user-score").innerText = (++userScore).toString();
    } else {
        document.getElementById("computer-score").innerText = (++computerScore).toString();
    }

}

function resetBorder() {
    for (const element of document.querySelectorAll(".choice")) {
        element.style.border = "black dashed 2px";
        element.style.backgroundColor = "azure";
    }
}

let userStone = userChoices[0];
let userPaper = userChoices[1];
let userScissors = userChoices[2];

let userChoice;
let computerChoice;



userStone.addEventListener("click", () => {
    userChoice = "pierre";
    resetBorder();
    userStone.style.border = "green 3px solid"
    setTimeout(() => userStone.style.border = "dashed 2px black", 2000);
    computerChoice = getRandom();
    getResult(userChoice, computerChoice);
});
userPaper.addEventListener("click", () => {
    userChoice = "feuille";
    resetBorder();
    userPaper.style.border = "green 3px solid"
    setTimeout(() => userPaper.style.border = "dashed 2px black", 2000);
    computerChoice = getRandom();
    getResult(userChoice, computerChoice);
});
userScissors.addEventListener("click", () =>{
    userChoice = "ciseaux";
    resetBorder();
    userScissors.style.border = "green 3px solid"
    setTimeout(() => userScissors.style.border = "dashed 2px black", 2000);
    computerChoice = getRandom();
    getResult(userChoice, computerChoice);
});
