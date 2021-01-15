///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// READ FIRST -----
// The assertions are there only to help you make sure
// your functions are written correctly. There is no need
// to change them. If you write your function correctly,
// the assertions will do nothing. If you write your function
// incorrectly or not at all, your assertions will fail
// in your console.

// Q1
// Write a function called `toSeconds` that takes one
// parameter as minutes and returns it as seconds.

function toSeconds(num) {
    return num * 60
}

console.assert(toSeconds(2) === 120);
console.assert(toSeconds(45) === 2700);
console.assert(toSeconds(12) === 720);

// Q2
// Write a function called `repeatThrice` that takes one
// parameter (a string) repeats it three times then returns it

var strThrice=''
function repeatThrice(str) {
    
     for (var i=0; i<3 ; i++) {
         strThrice += str
     }
    return strThrice
 }

// console.assert(repeatThrice("bang!") === "bang! bang! bang!");
// console.assert(repeatThrice("dun!") === "dun! dun! dun!");
// console.assert(repeatThrice("go!") === "go! go! go!");

// Q3
// Write a function called `getFirstItem` that takes one
// parameter (an array) and returns the first item in
// the array
function getFirstItem(arr) {
    return arr[0]
}
console.assert(getFirstItem([-1, 1, 6]) === -1);
console.assert(getFirstItem([12, 7, 21]) === 12);
console.assert(getFirstItem([23, 54, 90]) === 23);

// Q4
// Write a function called `getLastItem` that takes one
// parameter (an array) and returns the last item in
// the array

function getLastItem(arr) {
    return arr[arr.length - 1]
}
console.assert(getLastItem([4, 7, 2]) === 2);
console.assert(getLastItem([6, 90, 12, 121]) === 121);
console.assert(getLastItem([23, 54]) === 54);

// Q5
// Write a function called `getPerimeter` that takes 2
// parameters (2 numbers) calculates the perimeter of
// a rectangle then returns it.
function getPerimeter(nLength, nWidth) {
    var vPerimeter =0
    return vPerimeter = ((nLength+nWidth) *2)
}

console.assert(getPerimeter(12, 30) === 84);
console.assert(getPerimeter(12.14, 40.12) === 104.52);
console.assert(getPerimeter(10, 30) === 80);


// Q6
// Write a function called `countVowels` that takes 1
// parameters (a strings) counts how many vowels are in
// that sting then returns it.


function countVowels(str) {
    var countVowel =0  
    for (var i = 0; i<str.length ; i++) {
        if (str[i] =='a' || str[i] == 'e' || str[i] == 'i' || str[i] =='o' || str[i] == 'u') {
            countVowel = countVowel + 1
        }
    }
    return countVowel
}
console.assert(countVowels("you") === 2);
console.assert(countVowels("got") === 1);
console.assert(countVowels("this") === 1);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
