//Killer
let killerRoom = "garage"

function killerRound(){
    let killerActionPossibility = Math.floor(Math.random() * 2);
    let killerNewRoom = Math.floor(Math.random() * 2);

    const room = rooms.find(r => r.id === killerRoom);


        if(killerActionPossibility === 0){
            alert("The killer didn't make an action!")
            return;
        }else{
            const randomIndex = Math.floor(Math.random() * room.connections.length);
            killerRoom = room.connections[randomIndex];
            alert("The killer is moving!")
        }
}

//Action count per round
actions = 5
function makeAction() {
    actions -= 1
}

function checkAction() {
    if(actions <= 0){
        alert("You don't have more actions!")
        return false
    }
    return true
}



//Menus
menu = document.getElementById("menu")
startMenu = document.getElementById("start")
walkMenu = document.getElementById("walkMenu")


//Rooms
const rooms = [
    { id: "bedroom", connections: ["livingroom"] },
    { id: "livingroom", connections: ["bedroom", "kitchen"] },
    { id: "kitchen", connections: ["livingroom", "garage"] },
    { id: "garage", connections: ["kitchen", "backyard"] },
    { id: "backyard", connections: ["garage"] }
];


//Set rooms' elements (image, button)
const roomElements = {};
rooms.forEach(room => {
    roomElements[room.id] = document.getElementById(room.id);
});


//Set current room
let currentRoom = "bedroom";

//Show room and its properties
function showRoom() {
    if(!checkAction()) return;

    makeAction()
    
    killerRound()
    checkCurrentRoom()

    //Hide all rooms
    rooms.forEach(room => {
        roomElements[room.id].style.display = "none";
    });

    //Show current room
    roomElements[currentRoom].style.display = "block";

    updateWalkMenu();

}



function checkCurrentRoom(){
    if(currentRoom === killerRoom){
        alert("You're in the same room of killer!")

    }
}


function updateWalkMenu() {

    walkMenu.innerHTML = ""; // Clean old buttons

    const room = rooms.find(r => r.id === currentRoom);

    room.connections.forEach(conn => {

        const btn = document.createElement("button");
        btn.textContent = conn;

        btn.onclick = () => {
            currentRoom = conn;
            showRoom();
        };

    walkMenu.appendChild(btn);
});
}




//Start

function start(){
    startMenu.style.display = "none"
    menu.style.display = "block"

    currentRoom = "bedroom";
    showRoom();
}



//Menu

function showWalkMenu(){
    walkMenu.style.display = "block"
}
