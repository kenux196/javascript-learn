// Map, Set
let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");
console.log(map);
console.log(map.get("1"));
console.log(map.get(1));
for (let item of map) {
  console.log(item);
  // console.log(map.get(key))
}
console.log(map.keys);
for (let key of map.keys()) {
  console.log(`key: ${key}, value: ${map.get(key)}`);
}

for (let value of map.values()) {
  console.log(value);
}

map.forEach((value, key, map) => {
  console.log(`key: ${key}, value: ${value}`);
});

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  console.log(value);
});
