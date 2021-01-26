const arr1 = [5, 21, 8, 100];

const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2[i] = arr1[i] * 2;
}
console.log(arr2);

const arr3 = [];
arr1.forEach((n, i) => {
  arr3[i] = n * 2;
});
console.log(arr3);

const arr4 = arr1.map((n) => n * 2);
console.log(arr4);
