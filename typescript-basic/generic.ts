function echo(message: any): any {
  console.log('in echo: ', message);
  return message;
}

type phone = {
  name: string;
  price: number;
  brand: string;
};
const myPhone = { name: 'iPhone', price: 10000, brand: 'Apple' };
echo(1);
echo('hello');
echo(myPhone);

// 타입스크립트에서 any 사용은 지양 >> 제네릭 사용

function genericEcho<T>(message: T): T {
  console.log(message);
  return message;
}

genericEcho(1);
genericEcho<string>('Hello');
genericEcho<any>(myPhone);
// genericEcho<string>(myPhone); // error 발생
genericEcho('hello');

interface ILabel<T> {
  label: T;
}

const stringLabel: ILabel<string> = {
  label: 'hello',
};
console.log(stringLabel);
const numberLabel: ILabel<number> = {
  label: 123123,
};
console.log(numberLabel.label);

interface ICheckLength {
  length: number;
}

function echoWithLength<T extends ICheckLength>(message: T) {
  console.log(message);
}
echoWithLength('hello');
echoWithLength([1, 2, 4]);
echoWithLength({ length: 10 });
// echoWithLength(10); // length가 없기 때문에 에러발생
