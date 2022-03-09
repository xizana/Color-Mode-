let buttonOne = document.getElementById("btnOne");
let buttonTwo = document.getElementById("btnTwo");
let buttonThree = document.getElementById("btnThree");
let buttonFour = document.getElementById("btnFour");

let arr = [
    "#EE9176",
    "#56889A",
    "#B5A5C7",
    "#FFFADE",
    "#DCEAF1",
    "#0081B8",
    "#4B4453",
    "#4A4737"
]
function firstColorMode(){
    document.getElementById("main").style.backgroundColor = arr[0];
    document.getElementById("h2").style.color = arr[5];
}

function secondColorMode(){
    document.getElementById("main").style.backgroundColor = arr[1];
    document.getElementById("h2").style.color = arr[4];
}

function thirdColorMode(){
    document.getElementById("main").style.backgroundColor = arr[2];
    document.getElementById("h2").style.color = arr[6];
}

function fourthColorMode(){
    document.getElementById("main").style.backgroundColor = arr[3];
    document.getElementById("h2").style.color = arr[7];
}


buttonOne.addEventListener("click", firstColorMode);
buttonTwo.addEventListener("click", secondColorMode);
buttonThree.addEventListener("click", thirdColorMode);
buttonFour.addEventListener("click", fourthColorMode);

