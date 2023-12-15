/**
 * Immutable Object
 */

const yuJin = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin);

/**
 * Extensible
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));
yuJin['group'] = 'ive';
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * seal
 */
const yuJin2 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);
delete yuJin2['name'];
console.log(yuJin2);
// seal = configurable false 와 동일함.

/**
 * freezed : 읽기만 가능함.
 */
const yuJin3 = {
  name: '안유진',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));
console.log(Object.getOwnPropertyDescriptors(yuJin3));
yuJin3.name = '정원';
console.log(yuJin3);

const yuJin4 = {
  name: '안유진',
  year: 2003,
  wonYoung: {
    name: '장원영',
    year: 2002,
  },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));
