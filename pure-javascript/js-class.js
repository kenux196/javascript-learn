// class
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi! " + this.name);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("이름이 너무 짧다.");
      return;
    }
    this._name = value;
  }
}

let user = new User("kenux");
user.sayHi();

console.log(typeof User); // 클래스는 함수이다.
console.log(typeof user);
console.log(User);

console.log(user.name);
user = new User("");
console.log(user);

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} 이/가 멈췄습니다.`);
  }
}

let animal = new Animal("동물");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} 이/가 숨었습니다.~`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

start();

function start() {
  let blackRabbit = new Rabbit("흑토끼");
  blackRabbit.run(5);
  blackRabbit.hide();
  blackRabbit.stop();
  console.log(blackRabbit instanceof Rabbit);
}

class Rabbit2 extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

let rabbit2 = new Rabbit2("Blue Rabbit", 10);
console.log(rabbit2.name);
console.log(rabbit2.earLength);
