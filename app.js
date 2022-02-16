let pinFeild = document.querySelector("#pin-feild");
let calcFeild = document.querySelector("#calk-feild");

document.querySelector(".generate-btn").addEventListener("click", function  () {
    pinFeild.value = pinMoreThan3Digit()
  
})
function pinMoreThan3Digit () {

    let pin = Math.round(Math.random()*10000);
    if (pin >= 1000) {
        return pin;
    }
    else {
        return pinMoreThan3Digit();
    }
 }

 document.querySelector(".calc-body").addEventListener("click", function  (e) {
     let calctNum = e.target.innerText;
     if (isNaN(calctNum)){
        if (calctNum == "C") {
            calcFeild.value = "";
        }
     }
     else{
        let previous = calcFeild.value;
        let current = e.target.innerText;
        current = previous + current;
        calcFeild.value = current
     }


 })

 document.querySelector("#submit").addEventListener("click", function  () {
     if (parseInt(calcFeild.value) == parseInt(pinFeild.value)) {
         document.querySelector("#match").style.display = "block";
         document.querySelector("#not-match").style.display = "none";
         document.querySelectorAll(".half-width")[1].style.background = "green";
     } else {
        document.querySelector("#match").style.display = "none";
        document.querySelector("#not-match").style.display = "block";
        document.querySelectorAll(".half-width")[1].style.background = "red";

     }
 })