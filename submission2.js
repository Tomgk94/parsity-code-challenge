const findSum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
 };
  
const isPalindrome = function (str) {  
        var length = str.length;  
        
        for (let i = 0; i < length / 2; i++) {   
            if (str[i] !== str[length - 1 - i]) {  
                return false;  
            }  
        }  
        return true 
  };
  
const largestPair = function(array) {

    var product = [];
            for (var i = 0; i < array.length-1; i++) {
            let ans = array[i] * array[i+1];
            product.push(ans);
            }
            return Math.max(...product);

        };

  
const removeParenth = function(str) {
   return str.replace(/ *\([^)]*\) */g, "");
   };
  
const scoreScrabble = function(str) {
 str = str.toLowerCase();
   
  const scores = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4,
  v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10,}

  var sum = 0;
 for (var i = 0; i < str.length; ++i) {
    sum += scores[str.charAt(i)] || 0;
 }

 return(sum);
 };
