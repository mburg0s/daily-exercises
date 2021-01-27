// Q1:
// prevent myForm from refreshing the page on submit
// grab the value of myInput when you submit
// if the value of the input is greetings
// alert('hello')
// otherwise log the value to the console
// Q2:
// update myBtn to the text "updated!" on click
// Q3:
// take inputOne and inputTwo and multiply the result of the two
// inputs
// display this result in the #answer element
// Q1
const form1 = document.querySelector("#myForm");
const input = document.querySelector("#myInput");
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value === "greetings") {
    alert("hello");
  } else {
    console.log(input.value);
  }
});
// Q2
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", function () {
  btn.textContent = "updated!";
});
//Q3
const form2 = document.querySelector("#multiply");
const input1 = document.querySelector("#inputOne");
const input2 = document.querySelector("#inputTwo");
const answer = document.querySelector("#answer");
form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const result = input1.value * input2.value;
  answer.textContent = result;
});
