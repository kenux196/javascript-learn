/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만, 다른 값을 가져오거나 설정할때
 *                    호출되는 함수로 구성된 프로퍼티. 예) getter, setter
 */

const yuJin = {
  name: '안유진',
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

// { value: '안유진', writable: true, enumerable: true, configurable: true }
/**
 * 1) value: 실제 프로퍼티 값
 * 2) writable - 값 수정 가능 여부, false로 설정하면 프로퍼티 값 변경 불가
 * 3) enumerable - 열거 가능 여부, for...in 등을 사용할 수 있으면 true 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단
 *                false인 경우 프로퍼티 삭제나 어트리뷰터 변경이 금지된다.
 *                단, writable이 true인 경우 값 변경과 writable을 변경하는 것은 가능.
 */

console.log(Object.getOwnPropertyDescriptors(yuJin));
console.log('-------------------------');

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
console.log(yuJin2.age);
yuJin2.age = 45;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

/**
 * writable
 */
Object.defineProperty(yuJin2, 'height', {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptors(yuJin2));
yuJin2.height = 180;
console.log(yuJin2);
console.log('---------------');
Object.defineProperty(yuJin2, 'height', {
  writable: false,
});
yuJin2.height = 172;
console.log(yuJin2);

/**
 * enumerable
 */
Object.defineProperty(yuJin2, 'name', {
  enumerable: false,
});
console.log(Object.keys(yuJin2));
for (const key in yuJin2) {
  console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * configurable
 */
Object.defineProperty(yuJin2, 'height', {
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// 아래코드는 에러가 난다. configurable false 설정때문에.
Object.defineProperty(yuJin2, 'height', {
  enumerable: false,
});
