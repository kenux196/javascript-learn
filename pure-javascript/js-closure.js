function helloFunc(func) {
  this.greeting = "hello";
}

helloFunc.prototype.call = function (func) {
  func ? func(this.greeting) : this.func(this.greeting);
}

const userFunc = function(greeting) {
  console.log(greeting)
}

let objHello = new helloFunc();
objHello.func = userFunc;
objHello.call();