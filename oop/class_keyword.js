class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.name);
const gaeul = new IdolModel("가울", 2002);
console.log(gaeul);
yuJin.sayName();

console.log(typeof IdolModel);
console.log(typeof yuJin);
