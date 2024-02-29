const obj = {
  a: 10,
  b: 20,
};

const newObj = { ...obj };
console.log(newObj);

const arr = [1, 2, 3];
const newArr = [...arr];
console.log(newArr);

function getObject() {
  return obj;
}

const newObj2 = { ...getObject() };
console.log(newObj2);

const { a, b } = obj;
console.log(a);
console.log(b);

const kenux = {
  name: 'kenux',
  language: ['java', 'javascript', 'python', 'c#'],
  position: 'full-stack',
  area: 'daegu',
  hobby: 'read',
  age: 47,
};

var { name, language, position, age } = kenux;
console.log(
  `${name}는(은) ${position} 개발자이고 ${language}를 다룰수 있는 ${age}의 아저씨입니다.`,
);

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('success');
  }, 1000);
});
console.log(promise);
promise.then((res) => {
  console.log(res);
});

function lowHigh(number) {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      reject(new Error(`${number}는 부족해요.`));
    } else if (number > 50) {
      reject(`${number}는 과합니다.`);
    } else {
      resolve(`${number}는 적당합니다.`);
    }
  });
}

for (let index = 0; index < 10; index++) {
  const randomNum = Math.floor(Math.random() * 100);
  lowHigh(randomNum)
    .then(console.log, console.log)
    .catch((err) => console.log(err.message));
}

const asyncThing = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error!')), 1000);
});
asyncThing.catch((err) => console.log(err.message));

async function getTodo() {
  let todo = 'before';
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  todo = await response.json();
  console.log(todo);
  return todo;
}
// console.log(getTodo());
getTodo();

export async function fetchUserData() {
  const userList = await getUserList();
  console.log(userList);
}

function getUserList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userList = ['user1', 'user2', 'user3'];
      resolve(userList);
    }, 1000);
  });
}

fetchUserData();
