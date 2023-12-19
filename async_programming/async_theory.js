/**
 * Async theory
 */

// function longWork() {
//   const now = new Date();
//   const milliseconds = now.getTime();
//   const afterFiveSeconds = milliseconds + 5 * 1000;

//   while (new Date().getTime() < afterFiveSeconds) {}

//   console.log('Completed!!');
// }

function longWork() {
  setTimeout(() => {
    console.log('Completed!!');
  }, 2000);
}

console.log('Hello');
longWork();
console.log('World');
