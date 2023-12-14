class IdolModel {
  name;
  year;
  static groupName = '아이브';

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static getGroupName() {
    return this.groupName;
  }

  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(IdolModel.groupName);
console.log(IdolModel.getGroupName());

const yuJin2 = IdolModel.fromObject({
  name: '안유진',
  year: 2003,
});

console.log(yuJin2);
