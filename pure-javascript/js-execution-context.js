// js - 실행 컨텍스트와 클로저

// Execution Context
// 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념 feat.ECMAScript
// 실행 가능한 자바스크립트 코드 블록이 실행되는 환경
// 컨텍스트 안에 실행에 필요한 여러가지 정보를 담는다.

console.log("This is global context");

function ExContext1() {
  console.log("This is ExContext1");
}

function ExContext2() {
  ExContext1();
  console.log("This is ExContext2");
}

ExContext2();

// 활성 객체와 변수 객체

function execute(param1, param2) {
  let a = 1,
    b = 2;
  function func() {
    return a + b;
  }
  return param1 + param2 + func();
}

console.log(execute(3, 4));

// 스코프 체인

// 클로저 - 이미 생명 주기가 끝난 외부 함수의 변수를 참조하는 함수
function outerFunc() {
  let x = 1;
  console.log(x);
  return function () {
    console.log("Say Hello~!!!");
  };
}

let new_func = outerFunc();

new_func();

function outerFunc2(arg1, arg2) {
  let local = 8;
  return function innerFunction(innerArg) {
    console.log((arg1 + arg2) / (innerArg + local));
  };
}
let exam1 = outerFunc2(2, 4);
exam1(2);
