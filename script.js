function clickCheckmark() {
    let checkmark = document.getElementById("checkmark");
    let cross = document.getElementById("cross");
    checkmark.classList.remove("glowing");
    cross.classList.add("glowing");
}

function clickCross() {
    let checkmark = document.getElementById("checkmark");
    let cross = document.getElementById("cross");
    checkmark.classList.add("glowing");
    cross.classList.remove("glowing");
}

