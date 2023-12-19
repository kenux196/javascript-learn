/**
 * callback
 */

function waitAndRun() {
  setTimeout(() => {
    console.log('end!!');
  }, 2000);
}

// waitAndRun();

function waitAndRun2() {
  setTimeout(() => {
    console.log('first end!!');
    setTimeout(() => {
      console.log('second end!!');
      setTimeout(() => {
        console.log('third end!!');
        setTimeout(() => {
          console.log('4th end!!');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// waitAndRun2();

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Complete!!');
  }, 1000);
});

// timeoutPromise.then((res) => {
//   console.log('----- then ------');
//   console.log(res);
// });

const getPromise = (seconds, isSuccess) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve('completed!!');
      } else {
        reject('failed!!!');
      }
    }, seconds * 1000);
  });
};

// getPromise(1, true)
//   .then((res) => {
//     console.log('--- first then ---');
//     console.log(res);
//     return getPromise(1, true);
//   })
//   .then((res) => {
//     console.log('--- 2nd then ---');
//     console.log(res);
//     return getPromise(1, true);
//   })
//   .then((res) => {
//     console.log('--- 3rd then ---');
//     console.log(res);
//     return getPromise(1, false);
//   })
//   .then((res) => {
//     console.log('--- last then ---');
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log('--- catch ---');
//     console.log(res);
//   })
//   .finally(() => {
//     console.log('--- finally ---');
//   });

const timePromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(seconds);
    }, seconds * 1000);
  });

// Promise.all([timePromise(1), timePromise(2), timePromise(6)]).then((res) => {
//   console.log(res);
// });

async function runner() {
  try {
    const result1 = await getPromise(1, true);
    console.log(result1);
    const result2 = await getPromise(2, true);
    console.log(result2);
    const result3 = await getPromise(3, true);
    console.log(result3);
    const result4 = await getPromise(1, false);
    console.log(result4);
  } catch (error) {
    console.log('--- catch ---');
    console.log(error);
  } finally {
    console.log('--- finally ---');
  }
}

runner();
