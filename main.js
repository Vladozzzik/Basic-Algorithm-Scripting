// 1 Convert Celsius to Fahrenheit//

// function convertCtoF(celsius) {
//     let fahrenheit;
//     return fahrenheit=(celsius*(9/5)+32);
//   }
  
//   convertCtoF(30);


//   2 Reverse a String//

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
  
//   reverseString("hello");


//   3 Factorialize a Number

// function factorialize(num) {
//     let number = 1;
//     for (let i = 2; i <= num; i++) {
//       number *= i;
//     }
//     return number;
//   }
  
  
//   factorialize(5);


// 4 Find the Longest Word in a String

// function findLongestWordLength(str) {
//     let elLength = 0
//     str.split(' ').map((el)=>{
//       if(el.length>elLength){
//         elLength = el.length
//       }
//     })
//     console.log(elLength) 
//   }
  
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow")



// 5 Return Largest Numbers in Arrays //

// function largestOfFour(arr) {
//      return arr.map((el)=>{
//        return Math.max(...el)
//     })
    
//   }
  
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// 6 Confirm the Ending

// function confirmEnding(str, target) {
//     return str.slice(-target.length) === target
//   }
  
// confirmEnding("Bastian", "n");


// 7 Repeat a String Repeat a String


// function repeatStringNumTimes(str, num) {
//     let accumulatedStr = "";
  
//     for (let i = 0; i < num; i++) {
//       accumulatedStr += str;
//     }
  
//     return accumulatedStr;
// }


// 8 Truncate a String


// function truncateString(str, num) {
//     return str.length > num ? str.slice(0, num) + "..." : str;
// }
  
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);



// 9 Finders Keepers

// function findElement(arr, func) {
//     return arr.find(func);
//   }



//10 Boo who

// function booWho(bool) {
//     return typeof bool === "boolean";
//   }
  
  
// booWho(null);



// 11 Title Case a Sentence

// function titleCase(str) {
//     let newStr = str.split(' ').map((el)=>   el[0].toUpperCase() + el.slice(1).toLowerCase())

//     return newStr.join(' ');
//   }
  
// titleCase("I'm a little tea pot");



// 12 Slice and Splice

// function frankenSplice(arr1, arr2, n) {
//     return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
//   }
  
//   frankenSplice([1, 2, 3], [4, 5, 6], 1);


// 13 Falsy Bouncer

// function bouncer(arr) {
//     return arr.filter(Boolean);
//   }
//   bouncer([7, "ate", "", false, 9]);


// 14 Where do I Belong

// function getIndexToIns(arr, num) {
//     arr.sort((a, b) => a - b);
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= num)
//         return i;
//     }
  
//     return arr.length;
//   }
//   getIndexToIns([40, 60], 50);


// 16 Chunky Monkey

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    console.log(newArr);
  }
chunkArrayInGroups(["a", "b", "c", "d"], 2);


