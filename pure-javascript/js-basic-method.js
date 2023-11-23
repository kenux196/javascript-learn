// 메서드와 this
let user = {
  name: "kenux",
  age: 30,
  sayGooMorning: function () {
    console.log("Good morning!! " + this.name);
  },
};
// 메서드 만들기
user.sayHi = function () {
  console.log("안녕하세요!" + user.name);
};
user.sayHi();

function sayBye() {
  console.log("Good bye!!");
}
user.sayBye = sayBye;
user.sayBye();
user.sayGooMorning();
console.log(user);

// new 연산자와 생성자 함수
// 생성자 함수
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user1 = new User("kenux");
console.log(user1);

let str = "Hello";
console.log(str.toUpperCase());

// Json.stringify
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};
console.log(student);
let json = JSON.stringify(student);
console.log(json);

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["Johe", "Ann"],
  },
};
console.log(JSON.stringify(meetup, null, 2));

function formattedJson(obj) {
  return JSON.stringify(obj, null, 2);
}
let json1 = formattedJson(meetup);
console.log(json1);

let value = JSON.parse(json1);
console.log(value);
