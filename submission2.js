const findSum = function(array) {
  let sum = 0;

  array.forEach(item => {sum += item;});
  
  return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  const isPalindrome = function(str) {

   const stringLength = string.length;

   for (let i = 0; i < stringLength / 2; i++) {
       if (string[i] !== str[stringLength - 1 - i]) {
           return 'false';
       }
   }
   return 'true';
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
