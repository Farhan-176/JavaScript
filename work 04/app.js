  
// CHAP 15 ARRAYS



// JavaScript automatically numbers array elements,  The first element in the list always has an index of 0, the second element an index of 1, and so on.

// var names = ["farhan", "afridi", "khan", "ahmed"];
// console.log(names[1]);



// let students = [];
// console.log(students);
// students[0] = "Ahmed";
// students[1] = "Umair";
// students[5] = "aslam";

// console.log(students[3]);




// adding or removing array 


// removing value from array


// var pets = [];
// pets [0] = "dogs";
// pets [1] = "fish";
// console.log(pets[0])
// pets.pop();
// console.log(pets);

// adding value to array


// var pets = [];
// pets [0] = "dogs";
// pets [1] = "fish";
// pets.push("animal");
// console.log(pets)




// array.includes()  boolean true or false



// let userFavFruit = prompt('what is your fav fruit?');
// if (fruits.includes(userFavFruit)) {
//     console.log("Your fav fruit is already in the list.");
// }
// else {
//     console.log('your fav fruit is not in the list.');
// }


// array length



// let fruits = ['apple', 'banana', 'oranges'];
// console.log(fruits.length);


// array index





// let books = ["Deewan Ghalib", "Baal Jebreel", "Bahar Shariat", "Rich Dad Poor Dad"]
// let userRequiredBook = prompt('which book do you want to read?')
// let bookIndex = books.indexOf(userRequiredBook);
// if (bookIndex > -1) {
//     console.log("Your required book is indexed at " + bookIndex)
// }
// else {
//     console.log('Sorry your required book is unavailable.');
// }


// remving first word from array



// var names = ["farhan", "afridi", "khan", "pathan"];
// names.shift();
// console.log(names);



// adding brfore first word in array


// var names = ["farhan", "afridi", "khan", "ahmed"];
// names.unshift("MISTER");
// console.log(names)


// NOTES: 
// Use the splice method to insert one or more elements anywhere in an array, while optionally removing one or more elements that come after it.
// first digit is for index that after which index number the words will add
// second digit is for how many words be delete after the previous index number
// like 1 is second word banana after which the words will added then the second digit like 2 which will also include the previous index number and itself also which will deleted after run.   




// let fruits = ['apple', 'banana', 'oranges', "mango", "watermelon"];
// fruits.splice(1, 2, "Melons", 'Grapes');
// fruits.splice(3, 2);
// console.log(fruits);




// NOTES: 
//  slice is used for exist the lsit of your own choice 
// The first digit inside the parentheses is the index of the first element to be copied. The second digit is the index of the element after the last element to be copied.

// let fruits1 = ['apple', 'banana', 'oranges', "mango", "watermelon", "strawberry", "grapes", "melons"];


// let favFruits = fruits1.slice(2, 4); 
// let favFruits = fruits1.slice(4, 7);

// console.log(favFruits)



// Array.length
// Array.indexOf()
// Array.includes()

// let fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.length);
// console.log(fruits.indexOf("watermelon"));
// console.log(fruits.includes("watermelon"));






// chap 17 ends 