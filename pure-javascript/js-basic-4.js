class Animal {
  constructor() {
    this.name = "dog";
  }
}

function funcA() {}

let a = "kenux";
console.log(typeof a);
a = 123;
console.log(typeof a);
a = true;
console.log(typeof a);
a = null;
console.log(typeof a);
a = undefined;
console.log(typeof a);
a = new Array();
console.log(typeof a);
a = new Animal();
console.log(typeof a);
a = funcA;
console.log(typeof a);

let b = 5 / 2;
console.log(b);
console.log(Math.floor(b));

let nullVar = null;
console.log(typeof nullVar === null);
console.log(nullVar === null);

// Object() 객체 생성자 함수를 통한 객체 생성
let foo = new Object();
console.log(foo);
foo.name = "foo";
foo.age = 30;
foo.gender = "male";
console.log(typeof foo);
console.log(foo);

// 객체 리터럴 방식으로 객체 생성
let human2 = {
  name: "james",
  age: 40,
  gender: "male",
};
console.log(typeof human2);
console.log(human2);
console.log(human2.name);
console.log(human2["name"]);
console.log(human2.team);

human2.name = "mike";
console.log(human2);
human2.class = "computer engineer";
console.log(human2);

// for in 을 이용한 객체 프로퍼티 출력
for (const prop in human2) {
  console.log(prop, human2[prop]);
}

// 객체 프로퍼티 삭제
delete human2.class;
console.log(human2);
