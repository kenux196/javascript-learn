const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length; // + 1;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error('Save DB Error!'));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch()
    .finally(() => console.log('완료'));
  console.log(result);
  return result;
}

const myUser = { email: 'user2@test.com', password: '1212', name: 'user2' };
const result = registerByPromise(myUser);
result.then(console.log);

// const allResult = Promise.all([
//   saveDB(myUser),
//   sendEmail(myUser),
//   getResult(myUser),
// ]);
// allResult.then(console.log);
