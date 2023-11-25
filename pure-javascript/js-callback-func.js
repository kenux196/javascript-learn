// 콜백함수

// 즉시 실행 함수
(function (name) {
  console.log("This is the immediate function --> " + name);
})("kenux");

// inner function
// 클로저 생성 및 부모 함수 코드에서 외부에서의 접근을 막고 독립적인 헬퍼 함수를 구현하는 용도 등으로 사용
function parent() {
  let a = 100;
  let b = 200;
  console.log("This is parent function");

  function child() {
    let b = 300;
    console.log("This is child function");
    console.log(a);
    console.log(b);
  }

  child();
}

parent();
// child(); // Error: child is not defined.

// 스코프 체이닝

// 함수를 리턴하는 함수
let self = function () {
  console.log("a");
  return function () {
    console.log("B");
  };
};
self = self();
self();

// 함수호출과 this

// arguments 객체 : 함수를 호출할 때 인수들과 함께 암묵적으로 arguments객체가 함수 내부로 전달
function func(arg1, arg2) {
  console.log(arg1, arg2);
}
func();
func(1);
func(1, 2);
func(1, 2, 3);

function add(a, b) {
  console.log(arguments);
  console.log(arguments.length);
  return a + b;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(sum(4, 2));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

let myObject = {
  name: "foo",
  syaName: function () {
    console.log(this.name);
  },
};

let otherObject = {
  name: "bar",
};

otherObject.syaName = myObject.syaName;

myObject.syaName();
otherObject.syaName();

let foo = "I am foo";
console.log(foo);
// console.log(window.foo); // browser 환경에서 사용
console.log(global.foo);
