var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var calculateReturn = document.querySelector("#check");
var message = document.querySelector(".message")
var value = document.querySelectorAll(".table-value")
var clickNext = document.querySelector(".next");
var cashGivenDiv = document.querySelector(".wrap-cash-given")

var tableDiv = document.querySelector(".wrap-table");

var notes = [2000, 500, 100, 10, 5, 1];


clickNext.addEventListener("click", () => {
    hideMessage();
    if (billAmount.value >= 0) {
        cashGivenDiv.style.display = "block";
        clickNext.style.display = "none";
    } else {
        displayMessage = "Invalid bill Amount";
        errorMessage(displayMessage);
    }

})

calculateReturn.addEventListener("click", calculate);


function calculate() {
    hideMessage();
    hideNotesTable();
    let cash = cashGiven.value;
    let bill = billAmount.value;
    if(bill<=0 ){
        displayMessage = "Invalid bill amount";
        errorMessage(displayMessage);
    }else if(cash<=0){
        displayMessage = "Cash Given cannot be 0 or negative";
        errorMessage(displayMessage);
    }
    else{
         if (cash - bill === 0) {
        zeroReturn()


    } else if (cash - bill > 0) {

        let AmountRemaining = cashGiven.value - billAmount.value;
        calculateNotes(AmountRemaining);
        tableDiv.style.display = "block";
        // console.log(bill,cash)
    } else {
        displayMessage = "Give more cash or work your bill."
        errorMessage(displayMessage);

    }
    }
   
}

function hideMessage() {
    message.style.display = "none";
}

function errorMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;

}

function calculateNotes(amount) {
    for (i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(amount / notes[i]);
        amount = amount % notes[i];
        value[i].innerText = noOfNotes;

    }
}

function hideNotesTable() {
    tableDiv.style.display = "none";
}

function zeroReturn() {
    message.style.display = "block";
    message.innerText = "Cash given and bill is same no need to return any money"
}