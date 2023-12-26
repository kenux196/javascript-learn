type BookType = {
  title: string;
  price: number;
  author: string;
};

let bookType: BookType = {
  title: '책1',
  price: 10000,
  author: '작가1',
};

interface Book {
  title: string;
  price: number;
  author: string;
}

let book: Book = {
  title: '책2',
  price: 10000,
  author: '작가2',
};

interface Car {
  name: string;
  price: number;
  brand: string;
  options?: string[];
}

let avante: Car = {
  name: '아반떼',
  price: 1500,
  brand: '현대',
  options: ['에어컨', '열선시트'],
};
console.log(avante);

let morning: Car = {
  name: '모닝',
  price: 650,
  brand: '기아',
};
console.log(morning);

interface Citizen {
  id: string;
  name: string;
  region: string;
  readonly age: number;
}
let kenux: Citizen = {
  id: '123123',
  name: 'kenux',
  region: 'daegu',
  age: 45,
};
kenux.age = 33; // readonly 속성 에러 발생.
