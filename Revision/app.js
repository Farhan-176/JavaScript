






// let primeNumber = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]
// let startindex , endindex;
// for (let i = 0; i<primeNumber.length; i++) {
//     if (!startindex && primeNumber[i] >= 10) {
//         startindex = i
//     }
//     if (primeNumber[i]>= 11 && primeNumber[i]<=10) {
//         endindex = i+1;
//     }
// }
// console.log(endindex);
// let favPrime = primeNumber.slice(startindex, endindex);
// console.log(primeNumber, favPrime);




// let primeNumber = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]
// let favnumber = []
// for (let i = 0; i < primeNumber.length; i++) {
//     if (primeNumber[i]>=10 && primeNumber[i]<=20) {
//         favnumber.push(primeNumber[i])
//     }
    
// }
// console.log(favnumber);







// for (let i = 0; i <= 10; i++) {
//     console.log(i, "i loop");
//     for (let j = 0; j <= 3; j++) {
//         console.log(j, "j loop");
//     }
// }





// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <=10; j++) {
//         for (let k = 1; k <=15; k++) {
//             console.log("it is k loop");
            
//         }
//         console.log("it is j loop");
        
//     }
//     console.log("it is i loop");
    
// }








let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let userInput = +prompt('enter a number');
let favArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= userInput) {
        favArr.push(arr[i]);
    }
}
console.log(favArr);