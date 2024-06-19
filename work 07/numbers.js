


// chap 26


// round off the digit to its near number whether it is starting or ending


// M should be Capital


// var firstdigit = prompt("what is your number?");
// var digit = Math.round(firstdigit);
// console.log(digit);






// var digit = Math.round(1.934454545);
// console.log(digit);





// round the digit to up of number like 1.1 will be 2



// var digit = Math.ceil(1.1);
// console.log(digit);





// round the digit to down of number like 1.9 will be 1



// var digit = Math.floor(1.9);
// console.log(digit);



// chap 27

// generate random number of 16 digit 




// var digit = Math.random();
// console.log(digit);



// example of dice 
// var digit = Math.floor(Math.random() * 6) ;
// console.log(digit);



// chap 28



// STRING TO INTEGERS AND DECIMAL


// simple example of chapter


// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;
// console.log(yearsEligibleToVote)



// WHAT IS THE OPERATOR IT DOESNOT MEAN IT WILL DO THE MATH BECAUSE THE NUMBERS ARE IN STRING


// var minus = "200" + "100";
// console.log(minus);


// IT WILL DO MATH BECAUSE THE NUMBERS WILL BE CONVERTED TO STRING AND OPERATION WILL BE HELD



//  var minus1= 200 / 100;
//  console.log(minus1);


// IT WILL DISPLAY NaN(not a number) bcz duck is not a number to minus from 200



// var minus2 = "200" - "DUCK";
// console.log(minus2);

// If you want to do addition, you must convert any strings to numbers 
// parseInt converts all strings, including strings comprising floating-point numbers, to


//integers.And shocking but true: It it doesn't round. It simply lops off the decimals.


// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = parseInt(currentAge) - 18;
// console.log(yearsEligibleToVote);




// for float below 



// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = parseFloat(currentAge) - 18;
// console.log(yearsEligibleToVote);




// let age = "26.4489";
// console.log(age);

// age = parseInt(age);
// age = parseFloat(age);

// console.log(age);




// chap 29


// convert string to number


// var fisrtnumber = "24";
// var now = Number(fisrtnumber);
// console.log(now);



//convert number to string


// var fisrtnumber = 24;
// var now = fisrtnumber.toString();
// console.log(now);


// chap 30 


// controlling the length of numbers


// as input is in number so js will deal like a number(we also place a number fuction on) and taxrate also in number


// var price = prompt("what is the price of oil?");
// var taxrate = "10.6423423423";
// var total = Number(price) + (price * taxrate);
// var iftotal = total.toFixed(4);
// console.log(iftotal); 



// HERE IS SIMPLE EXAMPLE OF ABOV



// var price = 1;
// var taxrate = 10.6423423423;
// var total = price + (price * taxrate);
// var iftotal = total.toFixed();
// console.log(iftotal);

// var num = 2.12345;
// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
//     str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// pret = num.toFixed(5);
// console.log(pret);



// chap 30 end
