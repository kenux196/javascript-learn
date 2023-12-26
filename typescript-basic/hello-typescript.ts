const message: string = 'Hello World';
console.log(message);

// function foo() {
//   if (true) {
//     let a = 10;
//   }
//   return a;
// }
// console.log(foo());

function printMessage(message: string): void {
  console.log(message);
}

// printMessage(1); // error
printMessage('Hello');

const myInfo: {
  name: string;
  height: number;
  isConditionGood: boolean;
  gender?: string; // 필수값 아님. optional property
} = {
  name: 'yuJin',
  height: 168,
  isConditionGood: true,
  gender: 'female',
};

console.log(myInfo);

function printMessageWithAlert(message: string, isCritical?: boolean): void {
  if (isCritical) {
    console.log(`[Critical] ${message}`);
    return;
  }
  console.log(`[Info] ${message}`);
}

printMessageWithAlert('warning');
printMessageWithAlert('error', true);

const nullable: null = null;
console.log(nullable);

const unIntended: undefined = undefined;
console.log(unIntended);

const bigNumber: bigint = 123123123123123123123123123123123123123123123123n;
console.log(bigNumber / 1000000000000000000n);

const symbolValue: symbol = Symbol('symbol');
console.log(symbolValue);
console.log(symbolValue === Symbol('symbol'));

const myName: string = 'kenux';
console.log(myName.toUpperCase());

let anyType: any = 'kenux';
console.log(`${anyType} is ${typeof anyType}`);
anyType = 1;
console.log(`${anyType} is ${typeof anyType}`);
anyType = true;
console.log(`${anyType} is ${typeof anyType}`);
