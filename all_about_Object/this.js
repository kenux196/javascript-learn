/**
 * this
 *
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다.
 *
 * 하지만, this 키워드는 바인딩이 객체가 되는 생성되는 시점에 결정된다. (중요!!!)
 */

const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
  name: '안유진',
  year: 2003,

  sayHello() {
    return `안녕하세요. 저는 ${this.name} 입니다.`;
  },
};

console.log(yuJin.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요. 저는 ${this.name} 입니다.`;
  };
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }
  return dance2();
};

console.log(yuJin2.dance());

/**
 * this 키워드가 어떤 것을 가르키는가는 3가지만 기억하면 된다.
 *
 * 1) 일반 함수 호출할 땐 this가 최상위 객체(global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 */

/**
 * this mapping
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName() {
  return this.name;
}

console.log(returnName());

const yuJin3 = {
  name: '안유진',
};
console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

/**
 * 1) call -> 콤마(,)를 기준으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야 한다.
 */

function multiply(x, y, z) {
  return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));

/**
 * bind()
 */
const laterFunction = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunction);
console.log(laterFunction());
