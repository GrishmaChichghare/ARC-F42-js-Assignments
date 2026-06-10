const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

function resetLights() {
    redLight.style.backgroundColor = "#555a7c";
    yellowLight.style.backgroundColor = "#555a7c";
    greenLight.style.backgroundColor = "#555a7c";
}

function showStop() {
    resetLights();
    redLight.style.backgroundColor = "red";
}

function showReady() {
    resetLights();
    yellowLight.style.backgroundColor = "yellow";
}

function showGo() {
    resetLights();
    greenLight.style.backgroundColor = "green";
}