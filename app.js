// Accessing DOM Elements
// Bank
const balanceElement = document.getElementById("balance");
const loanbuttonElement = document.getElementById("loanbutton");
const outstandingElement = document.getElementById("outstanding");
const owedElement = document.getElementById("owed");
//Work
const payElement = document.getElementById("pay");
const bankbuttonElement = document.getElementById("bankbutton");
const workbuttonElement = document.getElementById("workbutton");
const repaybuttonElement = document.getElementById("repaybtn");

//Store
const pcselectElement = document.getElementById("pc-select");
const pcnameElement = document.getElementById("pcname");
const pcdescriptionElement = document.getElementById("pcdescription");
const pcpriceElement = document.getElementById("pcprice");
const buybuttonElement = document.getElementById("buybutton");

let computers = [];
let loaned = 0.0;
let bankBalance = 0.0;
let pay = 0.0;
let hasLoan = false;
balanceElement.innerText = bankBalance;
payElement.innerText = pay;

// Hides outstanding balance and repay loan button.
outstandingElement.style.display = "none"; //"block" to show again
repaybuttonElement.style.display = "none";

//Gets computer objects from API
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => computers = data)
    .then(computers => addComputersToMenu(computers));


//Adds computers to drop-down menu using computers array
const addComputersToMenu = (computers) => {
    computers.forEach(pc => addComputerToMenu(pc));
    pcpriceElement.innerText = computers[0].price;
}

const addComputerToMenu = (computer) => {
    const computerElement = document.createElement("option");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.title));
    pcselectElement.appendChild(computerElement);
}

//Changes price shown depending on computer chosen in drop-down menu
const handlePCSelectChange = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    pcpriceElement.innerText = selectedComputer.price;
}

pcselectElement.addEventListener("change", handlePCSelectChange);

// Handles changes to pay (by 'working')
const handleWork = e => {
    pay += 100;
    payElement.innerText = pay;
}

workbuttonElement.addEventListener("click", handleWork);

// Handles changes to pay (by depositing to bank)
//Deposit pay - 10% of salary if outsdanding loan

const handleDeposit = e => {
    bankBalance += pay;
    pay = pay - pay;
    balanceElement.innerText = bankBalance;
    payElement.innerText = pay;
    
}

bankbuttonElement.addEventListener("click", handleDeposit);

// Getting a loan
const handleLoanBtn = e => {
    if(bankBalance > 0 && !hasLoan){
        loaned = bankBalance*2;
        bankBalance += loaned;
        owedElement.innerText = loaned;
        outstandingElement.style.display = "block";
        repaybuttonElement.style.display = "block";
        balanceElement.innerText = bankBalance;
        hasLoan = true;
    }else return;
}

loanbuttonElement.addEventListener("click", handleLoanBtn);

// Repaying loan (add )

const handleRepay = e => {
    if(pay > loaned){
        pay -= loaned;
        loaned = 0;
        hasLoan = false;
    }
    else{
        loaned -= pay;
        pay -= 0;
    }
    payElement.innerText = pay;
    owedElement.innerText = loaned;
    if(loaned === 0){
        outstandingElement.style.display = "none";
        repaybuttonElement.style.display = "none";
        hasLoan = false;
    }
}

repaybuttonElement.addEventListener("click", handleRepay);