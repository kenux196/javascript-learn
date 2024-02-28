const foods = [];
console.log(foods);

foods.push('apple');
foods[3] = 'banana';
foods[2] = 'tomato';
foods.push('coffee');
console.log(foods);
console.log(Object.keys(foods));
console.log(foods[1]);
console.log(foods[10]);
console.log(foods.length);

foods.length = 10;
console.log(foods.length);
foods.length = 1;
console.log(foods);

const food2 = new Array('apple', 'banana');
console.log(food2);

const food3 = 'apple, banana'.split(', ');
console.log(food3);
console.log(food3.join(', '));
console.log(food3.indexOf('banana'));
console.log(food3.indexOf('coffee')); // 해당사항 없으면 -1 리턴

console.log(food3.includes('banana'));
console.log(food3.includes('coffee'));

food3.push('coffee');
console.log(food3);
let removedItems = food3.pop();
console.log(removedItems);
console.log(food3);
food3.push('coffee', 'sault', 'sugar', 'coke', 'snack');
console.log(food3);
removedItems = food3.slice(-3);
console.log(removedItems);
console.log(food3);
removedItems = food3.splice(-3);
console.log(food3);

foods.push('cooffee', 'coke', 'cherry', 'snack');
for (const food of foods) {
  console.log(food);
}
foods.forEach((item, index, array) => {
  console.log(`${item}은 ${index} 위치에 있다.`);
  console.log(array);
});

const combinedFoods = food2.concat(food3);
console.log(combinedFoods);
console.log(food2);
console.log(food3);

// 얕은 복사
const copyFoods1 = [...combinedFoods];
console.log(copyFoods1);
const copyFoods2 = Array.from(combinedFoods);
console.log(copyFoods2);
const copyFoods3 = combinedFoods.slice();
console.log(copyFoods3);
console.log(copyFoods3 == combinedFoods);
combinedFoods[0] = 'computer';
console.log(combinedFoods);
console.log(copyFoods3);

// 깊은 복사 json 활용
const foodDeepCopy = JSON.parse(JSON.stringify(combinedFoods));
console.log(foodDeepCopy);
console.log(JSON.stringify(combinedFoods));

const user = {
  name: 'kenux',
  age: 11,
  gender: 'male',
};
console.log(JSON.stringify(user));

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [2, 3, 4]));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [2, 5, 8]));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const overThree = numbers.filter((num) => num > 3);
console.log(overThree);

const words = ['spray', 'elite', 'superman', 'batman', 'hero'];
const result = words.filter((word) => word.length > 5);
console.log(result);

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
console.log(arr2.flat(2));
console.log(arr2.flat(Infinity));

const arr3 = [1, 2, 1, 3];
const result2 = arr3.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result2);

const map1 = arr3.map((x) => x * x);
console.log(map1);
