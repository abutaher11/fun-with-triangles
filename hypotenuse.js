const sides = document.querySelectorAll(".side-input");
const calBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output-box");

function calHypotenuse() {
    hideMessage();
    const sumOfSquares = calSumOfSqrs(Number(sides[0].value),Number(sides[1].value));
    const lenthOfHypotenuse = Math.sqrt(sumOfSquares);
    if (sides[0].value && sides[1].value) {
        showMessage("The length of the Hypotenuse is " + lenthOfHypotenuse);
    }
    else {
        showMessage("Please enter the length of both sides to continue")
    }
    
}

function calSumOfSqrs(a,b) {
    const sumOfSqrs = a*a + b*b;
    return sumOfSqrs;
}

function hideMessage () {
    output.style.display = "none";
}

function showMessage(msg) {
    output.style.display = "block";
    output.innerText = msg;
}


calBtn.addEventListener("click", calHypotenuse);