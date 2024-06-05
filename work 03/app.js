
// //  CHAP  10 if statement



// var x = prompt("Where does the Pope live?");
// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
// alert("Correct!");
// }

// let isShopOn = confirm('Is Mudassir shop open?');

// if (isShopOn) {
//     document.write("purchase lentils");
// }


// // CHAP 11 more if operator (< > <= >= == === != !==).



// var fullname1 = prompt("waht is your name?")
// var fullname = "ahmed";
// if ( fullname !== fullname1){
//     alert("yes you are the developer");
// }


// let age = +prompt('what is your age?');

// if (age <= 15) {
//     console.log('Congrats! you are eligible');
// }


// let domecile = prompt('In which city do you live?');

// if (domecile === 'karachi') {
//     console.log("Oh wow! You are  eligible for govt jobs.")
// }



// let eligibleAge = 21;
// let userAge = +prompt("what is your age?"); //24

// if (userAge > eligibleAge) {
//     console.log('You are eligible.');
// }




// //  CHAP 12    if, else, else if statement




// var fathername = prompt("waht is your  name?")
// if (fathername === "farhan") {
//     alert("you are selected");
// } 
// else if(fathername === "ali") {
//       alert("you are not selected");
// }
// else{
//     alert("contact the department");
// }



// let shopOpen = confirm('Is Mudassir shop open?');

// if (shopOpen) {
//     console.log("Purchase lentils");
// }
// else {
//     console.log('purchase chicken');
// }




// let domecile = prompt('where do you live?');

// if (domecile !== "karachi") {
//     console.log('Wow! you are eligible for  jobs');
// }
// else {
//     console.log("Congrats! You are going to make your own fortune.")};






//   CHAP 13   testings set of condition 



// var weight = 80;
// var time   = 4;

// if (weight > 80 && time < 6 && age > 17 && gender === male  ) {
//     alert("you are DC");
// } else {
//     alert("you are VC");
// }





// let hour = prompt('please enter current hour');
// if (hour >= 6 && hour <= 9) {
//     console.log('breakfast is ready');
// }
// else if (hour >= 11 && hour <= 13) {
//     console.log('lunch is ready');
// }
// else if (hour >= 17 && hour <= 20) {
//     console.log('dinner is served');
// }
// else {
//     console.log('please wait.');
// }



// let chr = prompt('enter a character');

// if (
//     chr === "a" ||
//     chr === "e" ||
//     chr === "i" ||
//     chr === "o" ||
//     chr === "u"
// ) {
//     console.log('your character is a vowel');
// }






// CAHP 14 NESTED IF ELSE
// var c = 2;
// var d = 2;
// var x = 4;
// var y = 4;
// var a = 1;
// var b = 1;
// var g = 10;
// var h = 10;
// var e = 55;
// var f = 55;
// if (c === d) {
// if (x === y) {
// g = h;
// }
// else if (a === b) {
// g = h;
// }
// else {
// e = f;
// }
// }
// else {
// e = f;
// }
  







// let areYouGraduate = confirm('are you graduate?');

// if (areYouGraduate) {
//     let faculty = prompt('which faculty you were enrolled in?');
//     if (faculty === "engineer") {
//         console.log('You are appointed as Engineer.');
//     }
//     else if (faculty === "medical") {
//         console.log('You are appointed as Doctor.');
//     }
//     else if (faculty === "commerce") {
//         let interest = prompt('are you interested in HR or accounts?');
//         if (interest === "HR") {
//             console.log('You are appointed as HR assistant.');
//         }
//         else if (interest === "accounts") {
//             console.log('You are appointed as accountant.');
//         }
//     }
// }
// else {
//     console.log('You are appointed as peon.');
// }