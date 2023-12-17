/**
 * Prototype
 */

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티.
console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype);
console.dir(IdolModel.prototype, {
  showHidden: true,
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = {
  name: '안유진',
  year: 2003,
};

console.log(yuJin.toString());
console.log(Object.prototype.toString());
