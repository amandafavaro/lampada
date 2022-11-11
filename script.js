const lamp = document.getElementById("lamp");
const lightSwitch = document.getElementById("switch");
var lampIsOn = false;

function useSwitch() {
    if (!lampIsOn) {
        lamp.src = "./images/on.png";
        lampIsOn = true;
    } else {
        lamp.src = "./images/off.png";
        lampIsOn = false;
    }    
}

lightSwitch.addEventListener("click", useSwitch)