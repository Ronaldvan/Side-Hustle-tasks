const counterValue = document.getElementById("counterValue");
const add = document.getElementById("add");
const lower = document.getElementById("lower");

var counter = 0;
add.addEventListener("click", () => {

    if (counter <= 49) {
        counter += 1;
        counterValue.innerHTML = counter;
    }
});

lower.addEventListener("click", () => {
    if (counter >= 1) {
        counter -= 1;
        counterValue.innerHTML = counter;
    }
})