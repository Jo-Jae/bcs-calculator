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

function onClickEnter() {
  switch (operator) {
    case "+":
      // console.log("현재 연산자는 +입니다.");
      result += +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;

    case "-":
      // console.log("현재 연산자는 -입니다.");
      result -= +resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;

    case "*":
      // console.log("현재 연산자는 *입니다.");
      result = result * resultEl.innerHTML;
      resultEl.innerHTML = result;
      break;

    case "/":
      // console.log("현재 연산자는 /입니다.");
      result /= +resultEl.innerHTML; //* result = result / resultEl.innerHTML; 와 같음 위의 모든 연산자 적용 가능
      resultEl.innerHTML = result;
      break;

    //나누기 케이스 소수점 없애는 로직
    // case "/":
    // result = parseInt(result / +resultEl.innerHTML, 10);
    // resultEl.innerHTML = result;
    // break;

    default:
      console.log("잘못된 연산자입니다.");
      break;
  }
}

//실수.
//   function onClickDelete() {
//   resultEl.innerHTML.substring(0, resultEl.innerHTML.length - 1);
// }

function onClickDelete() {
  resultEl.innerHTML = resultEl.innerHTML.substring(
    0,
    resultEl.innerHTML.length - 1
  );

  if (resultEl.innerHTML.length === 0) {
    resultEl.innerHTML = 0;
  }
}
