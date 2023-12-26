/**
 * 유니온타입
 * 변수 하나를 여러가지 타입으로 지정. 변수의 허용되는 타입을 두 개 이상의 타입으로 확장
 * | 로 타입 구분
 * 타입의 값이 할당되는 시점에 실제 타입이 정해짐.
 */
let anyValue: number | string | boolean = 10;
console.log(typeof anyValue);
printAny(anyValue);
anyValue = 'string';
console.log(typeof anyValue);
printAny(anyValue);
anyValue = true;
console.log(typeof anyValue);
printAny(anyValue);

/**
 * 내로잉:  타입의 범주를 좁힌다.
 * 타입 가드(type guard): 타입의 범위를 좁히는 데 사용하는 검사 방법, 값 할당 또는 조건문으로 검사해 타입을 좁힌다.
 */

function printAny(value: number | string | boolean): void {
  if (typeof value === 'number') {
    console.log(value.toExponential(3));
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (typeof value === 'boolean') {
    console.log(value ? '참' : '거짓');
  }
}

// alias
type nsb = number | string | boolean;
type nullableNsb = nsb | null | undefined;

let anyValue2: nsb = 10;
let nullableAnyValue: nullableNsb = null;

/**
 * 인터섹션 타입 : A and B
 * type 타입명 = {
 *    속성명: 타입;
 * }
 */
type cup = {
  size: string;
};

type brand = {
  brandName: string;
};

type brandedCup = cup & brand;

let starbucksGrandeSizeCup: brandedCup = {
  brandName: '스타벅스',
  size: 'grande',
};
console.log(starbucksGrandeSizeCup);

// 리터럴 타입: 기본 타입을 조합해서 특정 값만 할당할 수 있는 한정적인 타입을 만든다.
type CoffeeSize = 'small' | 'medium' | 'large';
let myCoffeeSize: CoffeeSize = 'small';
let errorCoffeeSize: CoffeeSize = 'tall'; // error.
