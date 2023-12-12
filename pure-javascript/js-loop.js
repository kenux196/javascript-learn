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

const yuJin = {
  name: "안유진",
  year: 2003,
  group: "아이브",
};

for (let key in yuJin) {
  console.log(key);
  console.log(yuJin[key]);
}
