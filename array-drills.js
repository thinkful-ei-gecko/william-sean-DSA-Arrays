//5. URLify a string
// function urlifyString(string) {
//   let array = string.split('');
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === ' ') {
//       array[i] = '%20';
//     }
//   }
//   let url = array.join('');
//   return url;
// }

// console.log(urlifyString('www.thinkful.com /tauh ida parv een'));

//6. Filtering an array
// function filterArray(array) {
//   let result = [];
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] >= 5) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(filterArray([-22,4,5,6,9,10]));

//7. Max sum in the array
// function maxSum(array) {
//   let sum = 0;
//   let currentSum = 0;
//   for(let i = 0; i < array.length; i++) {
//     currentSum += array[i];
//     if(sum < currentSum) {
//       sum = currentSum;
//     }
//   }
//   return sum;
// }

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

//8. Merge arrays
// function mergeAndSort(arr1, arr2) {
//   let result = arr1.concat(arr2);
//   result.sort((a,b) => a - b);
//   return result;
// }

// console.log(mergeAndSort([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//9. Remove characters
// function removeCharacters(string, removeChars) {
//   let result = '';
//   for(let i = 0; i < string.length; i++) {
//     let doesContain = false;
//     for(let j = 0; j < removeChars.length; j++) {
//       if(string[i] === removeChars[j]) {
//         doesContain = true;
//       }
//     }
//     if(!doesContain) {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//10. Products
// function products(array) {
//   let product = array.reduce((product,value) => product * value);
//   let result = [];
//   array.forEach(element => result.push(product/element));
//   return result;
// }

// console.log(products([1,3,9,4]));

// function productsVersionTwo(array) {
//   let product = 1;
//   let result = [];
//   for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j < array.length; j++) {
//       if(i !== j) {
//         product = product * array[j];
//       }
//     }
//     result.push(product);
//     product = 1; // Need to reset product back to 1 for next iteration, so it doesn't keep multiplying off of previous iteration's product
//   }
//   return result;
// }

// console.log(productsVersionTwo([1,3,9,4]));

//11. 2D array
// function twoDimension(array) {
//   let col = [];
//   let row = [];
//   const newArray = [...array];
//   for(let i = 0; i < array.length; i++) { // ROWS
//     if(array[i].includes(0)) {
//       for(let j = 0; j < array[i].length; j++) { //COLUMNS
//         if(array[i][j] === 0) {
//           col[j] = true;
//           row[i] = true;
//         }
//       }
//     }
//   }
//   for(let i = 0; i < newArray.length; i++) {
//     for(let j = 0; j < newArray[i].length; j++) {
//       if(row[i] || col[j]) {
//         newArray[i][j] = 0;
//       }
//     }
//   }
//   return newArray;
// }

// console.log(twoDimension(
//   [
//     [1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]
//   ]
// ));

//12. String rotation
// function isRotation(string, rotatedString) {
//   if(string.length !== rotatedString.length) {
//     return false;
//   }
//   let rotatedStringTwice = rotatedString + rotatedString; //azonamazonam
//   if(rotatedStringTwice.includes(string)) {
//     return true;
//   }
//   return false;
// }

// console.log(isRotation('amazon', 'azonma'));
// console.log(isRotation('amazon', 'azonam'));


/* Time complexities:
5. O(n) // Depends on how many spaces are in our string, which will determine array length which we iterate over
6. O(n) // Depends on how many elements are in our array argument
7. O(n) // Depends on how many elements in our array argument
8. O(n^2) // Looked up online and most searches have O(n^2)...not sure why though
9. O(n^2) // Nested for loop. The inner iteration depends on the outer iteration and we perform operations significantly more than just the iteration of the outer loop
10. O(n) / O(n^2) // Depends on the length of the array...Reduce and forEach go through each element in the array argument
11. O(n^2) // Nested for loop. Inner interation depends on outer iteration
12. O(1) // Length of string does not matter...every operation has a constant time complexity and requires 1 operation
*/