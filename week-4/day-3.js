// Q1:
// prevent myForm from refreshing the page on submit
// if the value of the input is "multiply"
// grab the value of #num1 and #num2
// and show the answer in alert

// Q2:
// update #box to the background color green when
//myBtn is clicked

const form1 = document.querySelector("#myForm");
const input = document.querySelector("#answer");
const n1 = document.querySelector("#num1");
const n2 = document.querySelector("#num2");
const box = document.querySelector("#box")
const btn = document.querySelector("#myBtn")

form1.addEventListener("click", function (e) {
    e.preventDefault();
    let ans = 0
    if (input.value == "multiply") {
        let ansN1 = 0
        let ansN2 = 0
        ansN1 = Number(n1.textContent)
        ansN2 = Number(n2.textContent)
        console.log(ansN1, ansN2)
        ans = ansN1 * ansN2
        alert ('Answer is ' + ans)
    }
} )

btn.addEventListener("click", function (e) {

    box.style.backgroundColor = "green"
})