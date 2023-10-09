let btn = document.querySelector('button.calc');
let amount = document.querySelector("#tip");
let service = document.querySelector(".service")
let people = document.querySelector("#people")
let tipBox = document.querySelector(".total-tip")
let tipDisplay = document.querySelector(".total-tip h1")
btn.addEventListener("click", function(){
    let amt = Number(amount.value);
    let serv = Number(service.value);
    let ppl = Number(people.value);
    let totalTip = (amt*serv)/ppl;
    tipDisplay.innerText = `₹ ` + totalTip.toFixed(2) + ((ppl>1) ? " Each" : "");
    tipBox.style.display = "block"
})