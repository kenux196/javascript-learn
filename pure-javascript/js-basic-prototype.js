// prototype
// 자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
// 자바스크립트에서는 이러한 부모 객체를 프로토타입 객체 혹은 프로토타입 이라고 부른다.

let foo = {
  name: "foo",
  age: 30,
};

foo.toString();

console.dir(foo);
console.log(Object.prototype);
for (const prop in foo) {
  console.log(prop);
}

// Array : []
let colorArr = ["orange", "yellow", "blue", "green", "red"];
console.log(colorArr);
colorArr.forEach((element) => {
  console.log(element);
});

for (const color in colorArr) {
  console.log(color + " " + colorArr[color]);
}

let emptyArr = [];
console.log(emptyArr);
console.log(emptyArr[0]);

emptyArr[0] = 100;
emptyArr[3] = "eight";
emptyArr[7] = true;
console.log(emptyArr);
console.log(emptyArr.length);

let someArr = [0, 1, 2];
someArr.length = 5;
console.log(someArr);

someArr.push("add");
console.log(someArr);

someArr.splice(3, 2);
console.log(someArr);
