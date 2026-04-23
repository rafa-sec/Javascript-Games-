const tipText = document.getElementById("tip");
const tipCountText = document.getElementById("tipCount");
const tipBtn = document.getElementById("tipBtn");

const image = document.getElementById("image");

const inputAnswer = document.getElementById("inputAnswer");
const inputBtn = document.getElementById("inputBtn");


let tipCount = 0;

Person = Math.floor(Math.random() * 3);

// Choose which person you're using
let currentPerson = "Ed Sheeran";
if(Person === 0){
    currentPerson = "Andrew Garfield"
}else if(Person === 1){
    currentPerson = "Ed Sheeran"
}




let imgWin = `./img/${currentPerson}Win.jpg`
let imgLose = `./img/${currentPerson}Lose.jpg`


// Store all tips in one object
const tips = {
    "Andrew Garfield": [
        "I'm an actor",
        "I'm British",
        "I'm tall",
        "I played Spider-Man once"
    ],
    "Ed Sheeran": [
        "I'm a singer",
        "I'm British",
        "I'm ginger",
        "I play music"
    ]
};

// Choose which person you're using

tipBtn.addEventListener("click", function () {

    const currentTips = tips[currentPerson];

    // Get tip based on count
    const tip = currentTips[tipCount % currentTips.length];

    tipText.innerText = tip;

    tipCount++;
    tipCountText.innerText = `Tip count: ${tipCount}`;
});




inputBtn.addEventListener("click", function () {

    const answer = inputAnswer.value.trim();


    if(answer === currentPerson){
        image.src = imgWin

    }else{
        image.src = imgLose
    }


})