// Accessing DOM Elements
// Bank
const balanceElement = document.getElementById("balance");
const loanbuttonElement = document.getElementById("loanbutton");

//Work
const payElement = document.getElementById("pay");
const bankbuttonElement = document.getElementById("bankbutton");
const workbuttonElement = document.getElementById("workbutton");

//Store
const pcselectElement = document.getElementById("pc-select");
const pcnameElement = document.getElementById("pcname");
const pcdescriptionElement = document.getElementById("pcdescription");
const pcpriceElement = document.getElementById("pcprice");
const buybuttonElement = document.getElementById("buybutton");

let computers = [];
let loaned = 0.0;
let bankBalance = 0.0;

fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => computers = data)
    .then(computers => addComputersToMenu(computers));

const addComputersToMenu = (computers) => {
    computers.forEach(pc => addComputerToMenu(pc));
}

const addComputerToMenu = (computer) => {
    const computerElement = document.createElement("option");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.title));
    pcselectElement.appendChild(computerElement);
}