const count = 10000;
const arrayTest = new Array();

class Member {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function start() {
  for (let index = 0; index < count; index++) {
    let memberName = "member" + index;
    arrayTest.push(new Member(memberName, getAge()));
  }
}

function getAge() {
  return Math.floor(Math.random() * 100);
}

start();
// console.log(arrayTest);
console.log(arrayTest[1121]);
