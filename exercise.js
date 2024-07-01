
// check if the number instead of its equal to the same power 89 --> 8*1 + 9*2= 89
// function narcissistic(value) {
//     // Code me to return true or false
//     let number = value;
//   let digits = number.toString().split('').map(Number);
//     //console.log( digits.length)
//     let sum = 0;
  
//       for (let index = 0; index < digits.length; index++) {
//        sum +=  Math.pow(digits[index], digits.length)  

//     }

//     return sum === Math.round(value);
//   //console.log(sum);
//   }

  
//   narcissistic(153)

//---------------------------------------------------------------------------

// check the descending order of numbers by the max 
// function descendingOrder(n){
//     //...
//     let digits = n.toString().split('').map(Number).reverse();
//     const maxNumbers = [];
    
//     while (digits.length > 0) {
//         let max = digits[0];
//         let maxIndex = 0;

//         for (let i = 1; i < digits.length; i++) {
//             if (digits[i] > max) {
//                 max = digits[i];
//                 maxIndex = i;
//             }
//             console.log(digits);
//         }

      
//         maxNumbers.push(max);
//         digits.splice(maxIndex, 1);
//     }

//     console.log(maxNumbers.join(""));
//     return +maxNumbers.join("");
//   }


//   descendingOrder(42145)

//--------------------------------------------------------------------------

// 8 , 1 
// function digPow(n, p){
//     // ...
//    const numbers =  n.toString().split('').map(Number)
//    let sum = 0;
//     for (let index = 0; index < numbers.length; index++) {
        
//        sum += Math.pow(numbers[index], p + i);
    
//     }
//     return sum % n === 0 ? sum / n : -1;

//   }


//   digPow(81,1)

//-----------------------------------------------------------------------


// function duplicateEncode(word){
//    // ...
//    const words  =  word.toLowerCase().split('');
//    console.log(words);
//    let x = ""
//    for (let index = 0; index < words.length; index++) {
//       if (words.indexOf(words[index]) === words.lastIndexOf(words[index])) {
//          x += '('; 
//      } else {
//          x += ')'; 
//      }
      
//    }
//    return x
//    console.log(x);
// }


// duplicateEncode("recede")


//---------------------------------------------------------------

//
// function comp(array1, array2){
//    //your code here
//    if (array1 === null || array2 === null || array1.length !== array2.length) {
//       return false; // Arrays should be of the same length
//   }

//   for (let index = 0; index < array2.length; index++) {
//       if (array2[index] % array1[index] !== 0) {
//           return false; 
//       }
//   }

//   return true;
//  }


//  comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])]



//------------------------------------------

// sort number inside a string 
// function order(words){
//    // ...

//    const regex = /\d/;
//    const stringsWithNumber = words.split(" ");

//    stringsWithNumber.sort((a, b) => {
//       return parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/));
//   });

//   return stringsWithNumber.join(" ");
//  }


//  order("is2 Thi1s T4est 3a")


//---------------------------------------------------------------------------


// function extractDomain(url){

//    const expression = /(?:https?:\/\/)?(?:www\.)?([^\/\.]+)/

//    const matchWord = url.match(expression);

//    console.log(matchWord[1]);
//    return matchWord[1]
   
// }

// extractDomain("http://google.co.jp")


//---------------------------------------------------------------


// function moveZeros(arr) {
   
//    let nonZeroIndex = 0;


//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] !== 0) {
//            arr[nonZeroIndex] = arr[i];
//            nonZeroIndex++;
//        }
//    }

//    for (let i = nonZeroIndex; i < arr.length; i++) {
//       arr[i] = 0;
//   }

//   console.log(arr);
  
   
//  }

//  moveZeros([9, +0, 9, 1, 2, 1, 1, 3, 1, 9, 0,0, 9,0, 0, 0, 0, 0, +0, +0])

// //  [ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ] 
// //  to deeply equal [ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]

//----------------------------------------------------------------------------------------------------


// function longestConsec(strarr, k) {
//    // your code
//    let maxLength = 0;
//    let maxWord = "";

//    for (let index = 0; index <= strarr.length - k; index++) {
//       let combinedWord = "";
//       for (let i = 0; i < k; i++) {
//           combinedWord += strarr[index + i];
//           console.log("index",strarr[index]);
//           console.log("i",strarr[i]);
//           console.log("combies",strarr[index + i]);
//           if (maxLength < combinedWord.length) {
//             maxLength = combinedWord.length
//             maxWord = combinedWord
//           }
//       }
//       //console.log(`${combinedWord.padEnd(12)} (length ${combinedWord.length}) combination of words from strarr[${index}] to strarr[${index + k - 1}]`);
      
//   }
//   return maxWord
  
   
// }


// longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)




//-------------------------------------------------------------------------------------------------


// function sortArray(array) {
//    // Return a sorted array.
//    var odds = [];
//    //loop, if it's odd, push to odds array
//    for (var i = 0; i < array.length; ++i) {
//      if (array[i]%2 !== 0) {
//        odds.push(array[i]);
//      }
//    }
//    //sort odds from smallest to largest
//    odds.sort(function(a,b){
//      return a-b;
//    });
   
//    //loop through array, replace any odd values with sorted odd values
//    for (var j = 0; j < array.length; ++j) {
//      if (array[j]%2 !== 0) {
//        array[j] = odds.shift();
//      }
//    }
//    console.log(array);
//   return array;
//  }


// sortArray([5, 8, 6, 3, 4])




//--------------------------------------------------------------------------------------------

// function rgb(r, g, b) {
//     let hexR = Math.max(0, Math.min(255, Math.round(r))).toString(16).padStart(2, '0');
//     let hexG = Math.max(0, Math.min(255, Math.round(g))).toString(16).padStart(2, '0');
//     let hexB = Math.max(0, Math.min(255, Math.round(b))).toString(16).padStart(2, '0');

    
    
//     return (hexR + hexG + hexB).toUpperCase();
// }


// rgb(300 ,255 ,255)


//----------------------------------------------------------------------------------------------------------


// function fibonacci(n) {
//     const cache = {};
  
//     function fib(n) {
//       if (n === 0 || n === 1) {
//         return n;
//       }
  
//       if (cache[n]) {
//         return cache[n];
//       }
  
//       const result = fib(n - 1) + fib(n - 2);
//       cache[n] = result;
  
//       return result;
//     }
  
//     return fib(n);
//   }


//==================================================================

// function dirReduc(arr){
//     // ...
//     let simplified = false; 

//     // Continue looping until no more simplifications are made
//     while (!simplified) {
//         simplified = true; // Assume simplifications are done until proven otherwise

//         for (let index = 0; index < arr.length; index++) {
//             const current = arr[index];
//             const next = arr[index + 1];

//             // Check for opposite directions
//             if (current === "NORTH" && next === "SOUTH" ||
//                 current === "SOUTH" && next === "NORTH" ||
//                 current === "EAST" && next === "WEST" ||
//                 current === "WEST" && next === "EAST") {
//                 // Remove both current and next directions from the array
//                 arr.splice(index, 2);
//                 // Set simplified flag to false to indicate that simplifications were made
//                 simplified = false;
//                 // Decrement index to stay at the same position in the next iteration
//                 index--;
//             }
//         }
//     }
//     console.log(arr);
//     // Return the simplified array
//     return arr;
//   }


//   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])







//-----------------------------


// takes a postive integer > 0
// takes the next biggest number than can be formed by rearranaging the digits
// splited create a string 
// now its an array we can loop through it
// 


// function nextBigger(n){
//     //your code here
//     const digits = n.toString().split(""); 

//     let trff = false; 
    
//     for (let index = 0; index < digits.length - 1; index++) {
//         let current = digits[index];
//         let next = digits[index + 1];

//         if (current < next && current != 0) {
//             [digits[index], digits[index + 1]] = [digits[index + 1], digits[index]];
//             trff = true;
//             break; 
//         }
//     }

//     if (!trff) {
//         return -1;
//     }

//     const result = parseInt(digits.join(""), 10);
//     console.log(result);
//     return result;
//   }


//   nextBigger(2017) ===> 2071


//-----------------------------------------------------

// class PaginationHelper {
 
// 	constructor(collection, itemsPerPage) {
// 	// The constructor takes in an array of items and a integer indicating how many
// 	// items fit within a single page
//     this.collection = collection;
//     this.itemsPerPage = itemsPerPage;
    
// 	}
// 	itemCount() {
// 	// returns the number of items within the entire collection
//     return this.collection.length
// 	}
// 	pageCount() {
// 	// returns the number of pages
//     return Math.ceil(this.collection.length / this.itemsPerPage )
// 	}
// 	pageItemCount(pageIndex) {
// 	// returns the number of items on the current page. page_index is zero based.
// 	// this method should return -1 for pageIndex values that are out of range
//     const startIndex = pageIndex * this.itemsPerPage;
//     const endIndex = startIndex + this.itemsPerPage;
//     const pageItems = this.collection.slice(startIndex, endIndex);
//    // console.log(pageItems);
//     return  pageIndex < 0 && pageIndex.length != pageIndex  ?  -1 : pageItems.length || -1  ;

// 	}
// 	pageIndex(itemIndex) {
// 	// determines what page an item is on. Zero based indexes
// 	// this method should return -1 for itemIndex values that are out of range
  
//     if (itemIndex >= this.collection.length || itemIndex < 0) {
//         return -1;
//     }

//     // Step 2: Calculate page index
//     const pageIndex = Math.floor(itemIndex / this.itemsPerPage);

//     // Step 3: Return the calculated page index
//     return pageIndex;
// 	}
// }


// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
//  console.log("page count ",helper.pageCount()); // should == 2
//  console.log("item count",helper.itemCount()); // should == 6

// console.log( helper.pageItemCount(0)); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // // pageIndex takes an item index and returns the page that it belongs on
// console.log( helper.pageIndex(5));// should == 1 (zero based index)
// // helper.pageIndex(2); // should == 0
// // helper.pageIndex(20); // should == -1
// // helper.pageIndex(-10); // should == -1



//------------------------------------------------------------------------------------

// function zeros (n) {
// 	// your code here  
// 	// let result = 1;

//     // // Calculate factorial using a loop
//     // for (let i = 2; i <= n; i++) {
//     //     result *= i;
//     // }
	
// 	// const resultString = result.toString();
// 	// let countZero = 0;
//     // // Loop through the result string in reverse order
//     // for (let index = resultString.length - 1; index >= 0; index--) {

// 	// 	if (+resultString[index] === 0  ) {
// 	// 		countZero++			
// 	// 	}
// 	// 	else {
// 	// 		break
// 	// 	}
//     //     console.log(resultString[index]);
//     // }

// 	// let countZero = 0;

//     //  // Count trailing zeros directly from the factorial value
	
// 	//  while (result % 10 === 0) {
// 	// 	 countZero++;
// 	// 	 result /= 10;
// 	//  }
// 	//  console.log(countZero);
//     // return result;
	
// // 	let count = 0;
// //   while (n > 0) {
// //     n = Math.floor(n/5);
// //     count += n;
// //   }
// //   return count;
//   }



//  console.log(zeros(30)); 


//-----------------------------------------------------------------------------------


// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }

// // Function to find prime factors of a number
// function primeFactors(n) {
//     const x = n.toString();
//     let primeNumbers = [];
//     for (let index = 0; index < x.length; index++) {
//         const digit = +x[index];
//         if (isPrime(digit)) {
//             primeNumbers.push(digit);
//         }
//     }
// 	console.log(primeNumbers);
//     return primeNumbers;
// }

// primeFactors(86240)



//------------------------------------------------------------------------

// function generateHashtag (str) {
// 	if ( str === "" || str === undefined || /^\s+$/.test(str)) {
// 		return false
// 	}

// 	const spliited = str.toString().split(" ")
	
// 	for (let index = 0; index < spliited.length; index++) {
		
// 		spliited[index] = spliited[index].charAt(0).toUpperCase() + spliited[index].slice(1);
		
// 	}
// 	const joinedWord =  "#" + spliited.join("").trim()


// 	return joinedWord.length > 140 ? false : joinedWord
// }


// console.log(generateHashtag("    Hello     World   ")); 


//-----------------------------------------------------------


// function isSolved(board) {
// 	// TODO: Check if the board is solved!

// 	for (let index = 0; index < board.length; index++) {
// 		const subArray = board[index];
	
// 		for (let j = 0; j < subArray.length; j++) { 
// 			const currentValue = subArray[j];
// 			const nextValue = subArray[j + 1];
// 			console.log(currentValue);
// 			if (currentValue !== 1 && currentValue !== 2 ) { 
// 				console.log("-1");
// 				return -1;
// 			}
// 			else if ((currentValue === 1 || currentValue === 2) && (nextValue === 1 || nextValue === 2)) { 
// 				return 1 || 2
// 			}
// 			else{
// 				return 0
// 			}
// 		}
	
// 	}
//   }


//   isSolved([[0, 0, 1],
// 			[0, 1, 2],
// 			[2, 1, 0]])


//---------------------------------------------------------------------------------




// function hexStringToRGB(hexString) {
	

// 	const red =    parseInt(hexString.substring(1, 3), 16);  
// 	const green =    parseInt( hexString.substring(3, 5), 16);  
// 	const blue =    parseInt( hexString.substring(5), 16);  

// 	const obj = { r : red,  g : green, b :  blue}
// 	console.log(obj);
// 	return obj
// }

// hexStringToRGB("#FF9933")



//--------------------------------------------------------------------------------------------



