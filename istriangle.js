const inputs = document.querySelectorAll(".angle-input");
const checkbtn = document.querySelector("#check-btn");
const output = document.querySelector("#output-box");

function isTriangle() {
    hideMessage();
    const sum = sumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sum === 180){
        showMessage("Congrats! The angles form a triangle")
    }
    else if(sum<180 || sum>180) {
        showMessage("Alas! The angles don't form a triangle")
    }
}

function sumOfAngles(angle1, angle2, angle3) {
    hideMessage();
    if (Number(inputs[0].value>0) && Number(inputs[1].value>0) && Number(inputs[2].value>0)) {
        const angleSum = angle1 + angle2 + angle3;
        return angleSum;
    }
    else if (Number(inputs[0].value<=0) || Number(inputs[1].value<=0) || Number(inputs[2].value<=0)) {
        showMessage("Angles cannot be zero,empty or negative. Please enter valid angle values in all fields to continue")
    }
    
}

function hideMessage () {
    output.style.display = "none";
}

function showMessage(msg) {
    output.style.display = "block";
    output.innerText = msg;
}

checkbtn.addEventListener("click",isTriangle)
