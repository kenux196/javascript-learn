class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  // constructor(name, year) {
  //   super(name, year);
  // }

  dance() {
    return `${this.name}이(가) 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  // constructor(name, year) {
  //   super(name, year);
  // }

  sing() {
    return `${this.name}이(가) 노래를 합니다.`;
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());

const hero = new MaleIdolModel('지민', 1995);
console.log(hero);
console.log(hero.sing());
console.log(hero.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);
