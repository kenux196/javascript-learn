let now = new Date();
let calculatorAge = (birthYear) => now.getFullYear() - birthYear + 1;

console.log(`당신의 나이는 ${calculatorAge(1978)} 입니다.`);
