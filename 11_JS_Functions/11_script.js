/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// Print number from 0 - 10 in multiple column , having a difference 1 using a function
    
   function printNumbers(startNumber, endNumber){
       
       let result = '';
       for(let i=startNumber; i<=endNumber; i+=10){
           result += `${i} `;
       }
       console.log(result);
   }
   printNumbers(10, 110);     // As many times we enter the same function execution those many times it will repeat the printing pattern
   printNumbers(100, 180);
   printNumbers(190, 270);