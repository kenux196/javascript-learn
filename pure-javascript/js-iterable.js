// iterable
// for..of 반복문 사용가능
// iterable 객체 - 배열, 다수의 내장 객체, 문자열, 컬렉션

const separator = "------------------";
function displaySeparator() {
  console.log(separator);
}

for (let char of "test") {
  console.log(char);
}
displaySeparator();

let str = "𝒳😂";
for (let char of str) {
  console.log(char); // 𝒳와 😂가 차례대로 출력됨
}
displaySeparator();

// 유사배열객체: length property 있다. => iterable 객체 아님.
let arrayLike = {
  0: "hello",
  1: "world",
  length: 2,
};
console.log(arrayLike);

//for (let item of arrayLike) => iterable이 아니므로 에러 발생함.

// Array.from : iterable이나 유사배열을 배열로 만든다.
let arr = Array.from(arrayLike);
console.log(arr);
displaySeparator();
