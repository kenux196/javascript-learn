/**
 * Class
 */

class Hello {
  constructor() {
    this.sayHello('created');
  }

  sayHello(message: string) {
    console.log(message);
  }
}

const hello = new Hello();
hello.sayHello('Hello World');

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle.getArea());

interface IClicker {
  count: number;
  click(): number;
}

class Clicker implements IClicker {
  count: number = 0;

  click(): number {
    this.count += 1;
    console.log(`Click! [count]: ${this.count}`);
    return this.count;
  }
}
const clicker = new Clicker();
clicker.click();
clicker.click();
clicker.click();

// 추상클래스
abstract class Logger {
  prepare() {
    console.log('======================');
    console.log('로그를 남기기 위한 준비');
  }

  log(message: string) {
    this.prepare();
    this.execute(message);
    this.complete();
  }

  abstract execute(message: string): void;

  complete() {
    console.log('작업완료');
    console.log('');
  }
}

class FileLogger extends Logger {
  fileName: string;

  constructor(fileName: string) {
    super();
    this.fileName = fileName;
  }

  execute(message: string): void {
    console.log(`[${this.fileName}] > `, message);
  }
}

class ConsoleLogger extends Logger {
  execute(message: string): void {
    console.log(message);
  }
}

const fileLogger = new FileLogger('test.log');
fileLogger.log('파일에 로그 남기기 테스트');

const consoleLogger = new ConsoleLogger();
consoleLogger.log('로그 남기기');
