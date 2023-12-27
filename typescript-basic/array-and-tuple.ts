/**
 * 배열: 크기 비고정, 각 원소의 타입을 정의
 * 튜플: 크기 고정, 원소 개수만큼 타입을 정의
 */

// 배열
const numbers: number[] = [1, 2, 3, 4, 5];
const numbers2: number[] = [6, 7, 8, 9, 10];
const stringArray: Array<string> = ['a', 'b', 'c'];

// 스프레드 연산자로 합치기
const oneToTen = [...numbers, ...numbers2];
console.log(oneToTen);
console.log(...oneToTen);

// 객체 배열 타입
const idols: { name: string; birth: number }[] = [
  { name: 'minji', birth: 2004 },
  { name: 'hani', birth: 2004 },
  { name: 'danielle', birth: 2005 },
  { name: 'haerin', birth: 2006 },
  { name: 'hyein', birth: 2008 },
];
console.log(idols);

// 배열의 원소가 객체인 타입
const idols2: Array<{ name: string; birth: number }> = [
  { name: 'minji', birth: 2004 },
  { name: 'hani', birth: 2004 },
  { name: 'danielle', birth: 2005 },
  { name: 'haerin', birth: 2006 },
  { name: 'hyein', birth: 2008 },
];
console.log(idols2);

// 튜플: 원소 개수만큼 타입 정의 필요.
const myTuple: [string, number] = ['kenux', 173];
console.log(myTuple);

function printMyInfo(label: string, info: [string, number]): void {
  console.log(`[${label}]`, ...info);
}
printMyInfo('튜플테스트', myTuple);

function fetchUser(): [string, number] {
  return myTuple;
}
console.log(fetchUser());
const [name24, height24] = fetchUser();
console.log(name24, height24);

function throwError(message: string) {
  throw new Error(message);
}
throwError('error');
