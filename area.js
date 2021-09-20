const sides = document.querySelectorAll(".side-input");
const calBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output-box");

function calculateArea() {
    hideMessage();
    const baseHeight = calBaseIntoHeight(Number(sides[0].value),Number(sides[1].value));
    const area =  Number(1/2 * baseHeight);
    if (sides[0].value && sides[1].value && Number(sides[0].value>0) && Number(sides[1].value>0)) {
        showMessage("The area of the triangle is " + area + " units.");
    }
    else if (Number(sides[0].value<0) || Number(sides[1].value<0)) {
        showMessage("Length cannot be negative. Please enter valid lengths to continue")
    }
    else {
        showMessage("Lenght values cannot be empty or zero. Please enter the correct values to continue.");
    };
    
}

function calBaseIntoHeight(a,b) {
    const baseIntoHeight = a*b;
    return baseIntoHeight;
}

function hideMessage () {
    output.style.display = "none";
}

function showMessage(msg) {
    output.style.display = "block";
    output.innerText = msg;
}


calBtn.addEventListener("click", calculateArea);