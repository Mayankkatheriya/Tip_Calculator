let btn = document.querySelector('button.calc');
let amount = document.querySelector("#tip");
let service = document.querySelector(".service");
let people = document.querySelector("#people");
let currency = document.querySelector(".currency");
let tipBox = document.querySelector(".total-tip");
let tipDisplay = document.querySelector(".total-tip h1");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const amt = Number(amount.value);
    const serv = Number(service.value);
    const ppl = Number(people.value);
    const curr = Number(currency.value);

    let sign = '₹ ';
    if (curr === 0.044) {
        sign = 'د.إ‎ ';
    } else if (curr === 0.012) {
        sign = '$ ';
    } else if (curr === 0.011) {
        sign = '€ ';
    } else if (curr === 0.68) {
        sign = '₱ ';
    }

    const totalTip = (amt * serv * curr) / ppl;
    tipDisplay.innerText = `${sign}${totalTip.toFixed(3)}${ppl > 1 ? " Each" : ""}`;
    tipBox.style.display = "block";
});