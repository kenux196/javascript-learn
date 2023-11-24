// 함수

// 함수 리터럴을 이용한 함수 생성
// 대부분의 경우에 이렇게 사용
function add(x, y) {
  return x + y;
}

// 함수 표현식 방식
// let add = function (x, y) {
//   return x + y;
// };

let plus = add;

console.log(plus(1, 2));

// console.log(add2(2, 4)); // 에러발생. 함수 표현식으로 생성된 함수 호출은 선언 이후에 사용해야 한다.

let add2 = (x, y) => {
  return x + y;
};
console.log(add2(1, 3));

// 함수도 객체이므로 프로퍼티를 가질 수 있다.
add.result = add(3, 2);
add.status = "OK";

console.log(add.result);
console.log(add.status);

for (const prop in add) {
  if (Object.hasOwnProperty.call(add, prop)) {
    console.log(prop);
  }
}
