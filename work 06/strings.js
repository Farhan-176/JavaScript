

// chap 22 strings measuring length and extracting parts

// var cities = ["farhan1", "farhan2", "farhan3", "farhan4" ];
// citiestocheck = prompt ('what is you cities name?');
// var firstchar = citiestocheck.slice(1);
// var otherchar = citiestocheck.slice(0,1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// firstchar1 = firstchar + otherchar ; 
// console.log(firstchar1);



// var month = prompt("Enter a month");
// var charsInMonth = month.length;
//  if (charsInMonth > 3) {
// monthAbbrev = month.slice(0, 3);}
// console.log(monthAbbrev);


// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 2) === " ") {
// alert("No double spaces!");
// break;}}


// chap 23 strings > finding segments

// let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";
// for (let i = 0; i < str.length; i++) {
//     let targettxt = str.slice(i, i + 12);
//     if (targettxt === "world war II") {
//         str = str.slice(0, i) + "the Second World War" + str.slice(i + 12);
//     }
// }
// console.log(str);





// var text = "hello"
// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") {
//      alert("Exclamation point found!");
//      break;
//      }
//      }
    



// // last index is used to find the common word if it is also written in the last



// var text = "to be or not you will be alone at the end"
// var segindex = text.lastIndexOf("be");
// console.log(segindex)

// // .replace is used as shortcut method and replace the targeted word even if there are meany words.



// let txt = "to be or not you will be alone at the end";
// txt = txt.replace(/be/g , "the");
// console.log(txt);




// chap 24

// // charat is used to bring the first letter of word




// var firstname = prompt("what is your name?");
// var firstchar = firstname.charAt(0);
// console.log(firstchar);



// chap 24


// it bring the last letter of word

// var firstname = prompt("what is your name?");
// var firstchar = firstname.charAt(firstname.length - 1);
// console.log(firstchar);



// chap 25 is of string discuss early
