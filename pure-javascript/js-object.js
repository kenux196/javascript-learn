/**
 * Object
 */

let yuJin = {
  name: "안유진",
  group: "아이브",
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin["name"]);
console.log(yuJin.dance());

const nameKey = "name";
const nameValue = "안유진";
const groupKey = "group";
const groupValue = "아이브";

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2["group"] = "동네사람";
console.log(yuJin2);

yuJin2["englishName"] = "Yu Jin Ahn";
console.log(yuJin2);

delete yuJin2["englishName"];
console.log(yuJin2);

console.log(Object.keys(yuJin2));
console.log(Object.values(yuJin2));

const name = "안유진";
const yuJin3 = {
  name,
};
console.log(yuJin3);
