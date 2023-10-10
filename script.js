let btn = document.querySelector('button.calc');
let amount = document.querySelector("#tip");
let service = document.querySelector(".service")
let people = document.querySelector("#people")
let currency = document.querySelector(".currency")
let tipBox = document.querySelector(".total-tip")
let tipDisplay = document.querySelector(".total-tip h1")
btn.addEventListener("click", function(){
    let amt = Number(amount.value);
    let serv = Number(service.value);
    let ppl = 1;
    ppl = Number(people.value);
    curr = Number(currency.value);
    let totalTip = (amt*serv*curr)/ppl;
    let sign = '₹ '
    if(curr == 0.044){
        sign = 'د.إ‎ '
    }
    else if(curr == 0.012){
        sign = '$ '
    }
    else if(curr == 0.011){
        sign = '€ '
    }
    else if(curr == 0.68){
        sign = '₱ '
    }
    tipDisplay.innerText = sign + totalTip.toFixed(3) + ((ppl>1) ? " Each" : "");
    tipBox.style.display = "block"
})