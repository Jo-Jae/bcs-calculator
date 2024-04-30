//1. const testEl = document.getElementById("test");        자바스크립스에서 html파일로접근하는 방법,document는 html 파일을 뜻함
// const testEl = document.querySelector("#test");
// const test2El = document.querySelector(".test2");
//1. testEl.innerHTML = "Hello";
// testEl.innerHTML = "Hello";
// test2El.innerHTML = "Javascript";

let result = 0;
let operator = "";

const resultEl = document.querySelector(".result");

resultEl.innerHTML = result;

function onClickNumber(number) {
  if (resultEl.innerHTML.length >= 13) return;

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }

  console.log(resultEl.innerHTML.length);
}

// function onClickOperator() {
//   result = +resultEl.innerHTML;

//   resultEl.innerHTML = 0;

//   operator = "+";
// }

// function onClickMinus() {
//   result = +resultEl.innerHTML;

//   resultEl.innerHTML = 0;

//   operator = "-";
// }

// function onClickMul() {
//   result = +resultEl.innerHTML;

//   resultEl.innerHTML = 0;

//   operator = "*";
// }

// function onClickDiv() {
//   result = +resultEl.innerHTML;

//   resultEl.innerHTML = 0;

//   operator = "/";
// }

function onClickOperator(inputOperator) {
  result = +resultEl.innerHTML;

  resultEl.innerHTML = 0;

  operator = inputOperator;
}
