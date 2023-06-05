console.log("Welcome to Tic Tac Toe");
let music = new Audio("assets/fragment.mp3");
let next = new Audio("assets/reset.mp3");
let gover = new Audio("assets/cheer.mp3");
let turn = "X";
let gameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 4,5,0],
        [3, 4, 5, 4, 15,0],
        [6, 7, 8, 4, 25,0],
        [0, 3, 6, -4, 15, 90],
        [1, 4, 7, 4, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 4, 15, 45],
        [2, 4, 6, 4, 15, 135]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
        document.querySelector(`.info`).innerText = boxtext[e[0]].innerText + " Won";
        gameover = true
        document.querySelector(`.imgbox`).getElementsByTagName("img")[0].style.width = "15vw";
        document.querySelector(".line").style.width = "22vw";
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        gover.play();
    }
})
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener(`click`, () => {
        if (boxtext.innerText === ``) {
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if (!gameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener(`click`, () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(`.imgbox`).getElementsByTagName("img")[0].style.width = "0vw";
})
