let fruits = ['Apple','Banana','Orange'];
let bananaIndex = fruits.indexOf("Banana");
fruits[bananaIndex] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits)