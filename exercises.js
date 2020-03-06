// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// // Write a method that accepts an array of strings and prints out every other string.
// function printEveryOtherItem(strings) {
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       console.log(string);
//     }
//     index += 1;
//   });
// }
// printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // Write a method that accepts an array of numbers and returns the sum.
// function computeSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// var cityPopulations = {chi: 2700000};
// cityPopulations["nyc"] = 8400000;
// cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
// console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 

// function printNums() {
//   var index = 1;
//   while(index <= 100) {
//     console.log(index);
//     index += 1;
//   }
// }

// printNums();


// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// function printNums() {
//   var index = 1;
//   while(index < 100) {
//     if(index % 2 === 1) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }

// printNums();


// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

// function count55(array) {
//   var count = 0;
//   array.forEach(function(number){
//     if(number === 55){
//       count += 1;
//     }
//   });
//   return count;
// }

// console.log(count55([1, 3, 55, 6, 56, 55, 77, 55, 89]));

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

// function awesome(array) {
//   var newArray = [];
//   var lastItem = array.pop();
//   array.forEach(function(char){
//     newArray.push(char, 'awesomesauce');
//   });
//   newArray.push(lastItem);
//   return newArray;
// }

// console.log(awesome(["a", "b", "c", "d", "e"]));


// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}

// var item_amounts = {chair: 5, table: 2};

// // item_amounts.chair = 3;
// item_amounts['chair'] = 3;

// console.log(item_amounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}

// var item_amounts = {chair: 5, table: 2};

// item_amounts.desks = 7;

// console.log(item_amounts);


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(num) {
//   var fact = 1;
//   while(num > 0) {
//     fact *= num;
//     num -= 1;
//   }
//   return fact;
// }

// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(10));


// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// function addingArrays(array1, array2) {
//   var newArray = [];
//   array1.forEach(function(num1){
//     array2.forEach(function(num2) {
//       newArray.push(num1 + num2);
//     });
//   });
//   return newArray;
// }

// console.log(addingArrays([1, 5, 10], [100, 500, 1000]));

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// function printEveryOther(strings) {
//   var index = 0;
//   var newArray = [];
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       newArray.push(string);
//     }
//     index++;
//   });
//   return newArray;
// }

// console.log(printEveryOther(["a", "b", "c", "d", "e", "f"]));

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// function greatestNumber(numbers) {
//   var highNum = numbers[0];
//   numbers.forEach(function(number) {
//     if (number > highNum) {
//       highNum = number;
//     }
//   });
//   return highNum;
// }

// console.log(greatestNumber([5, 4, 8, 1, 2, 10]));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

function reverseNumbers(numbers) {
  var newArray = [];
  for(var index = numbers.length - 1; index >= 0; index--) {
    newArray.push(numbers[index]);
  }
  return newArray;
}

console.log(reverseNumbers([1, 3, 5, 7]));