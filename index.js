
// Logic for choosing a rnadom number for the left dice



let randomNum1 = Math.floor(Math.random() * 6) + 1;
randomNum1 = "images/dice" + randomNum1 + ".png"


// Logic for choosing a rnadom number for the Right dice(they are same but if we use single statement then we will end up having same numbers for both of them!)


let randomNum2 = Math.floor(Math.random() * 6) + 1;
randomNum2 = "images/dice" + randomNum2 + ".png"



//Setting random images to left dice!

let leftDice = document.querySelector(".img1").setAttribute("src", randomNum1);


//Setting random images to Right dice!

let rightDice = document.querySelector(".img2").setAttribute("src", randomNum2);



// logic for choosing the winner


if (randomNum1 === randomNum2) {
    document.querySelector("h1").innerHTML = "🏳️ DRAW! 🏳️";
} else if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player One Wins.🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩Player Two Wins. 🚩";
}


