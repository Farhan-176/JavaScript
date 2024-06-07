
// for loops chap 18


// for (let i = 0; i <= 50; i++) {
//     console.log(i);
// }



// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i = i + 4) {
//     console.log(i)
// }


// let table = +prompt('enter table name');

// for (let i = 1; i <= 200; i++) {
//     document.write("<h3>" + table + " x " + i + " = " + table * i + "</h3>")
// }



// let students = ["aslam", "akram", "muzammil", "abdullah", "ahmed", "abdul karim", "anas"];

// for (let i = 0; i < students.length; i++) {
//     console.log("Hello " + students[i]);

// }




// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// cityToCheck = prompt('what is your city name?');
// for (var i = 1; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
// alert("It's one of the cleanest cities");
// }
// else{
//     alert("it is not one of it");
// }
// }






// var cities = ["farhan1", "farhan2", "farhan3", "farhan4" ]
// citiestocheck = prompt ('what is you cities name?')
// for ( var i = 0;  i <=4 ; i++) {
//     if (citiestocheck === cities[i]) {
//         alert("it is one of clean cities");
//     }
// }



// chap 19 for loops properties 





// var cleanestCities = ["khi", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var hello = cleanestCities.length;
// cityToCheck = prompt('what is your city name?');
// var matchFound = "false";
// for (var i = 0; i < hello; i++) {
// if (cityToCheck === cleanestCities[i]) {
//     var matchFound = "true";
// alert("It's one of the cleanest cities");
// }
// else{
// alert("it is not one of it");
// }
// break;
// }
// if (matchFound === "false") {
// alert("It's not on the list");
// }



// var cities = ["farhan1", "farhan2", "farhan3", "farhan4"]
// var numElment = cities.length;
// citiestocheck = prompt ('what is you cities name?')
// var matchfound = false;
// for ( var i = 0;  i <numElment ; i++) {
//     if (citiestocheck === cities[i]) {
//         matchfound = true;
//         alert("it is one of clean cities");
//         break;
//     }
// }
// if (matchfound === false)
// {
//     alert("it is not on the list")
// }


// chap 20 for loops nested

// var firstname = ["khuziama" , "ahsan" , "saadat"];
// var lastname = ["khan" , "yousufzai" , "afridi"];
// var fullname = [];
// for (var i= 0; i< firstname.length; i++) {
//     for (var j= 0; j < lastname.length; j++) {
//         fullname.push(firstname[i] + lastname[j]);
//         console.log(fullname)
//     }
// } 


// var firstname = ["khuziama" ,  "ali" , "ahsaan" ];
// var lastname  =  ["farhan" , "afridi"];
// fullname = [];
// for (var i = 0; i<firstname.length; i++){
//     for (var j = 0; j<lastname.length; j++){
//     fullname.push(firstname[i] + lastname[j]);
//     } 
// }
// window.alert (fullname)
// console.log(fullname)



// chap 21 changing case camel case also called 

// var cities = ["farhan1", "farhan2", "farhan3", "farhan4" ]
// citiestocheck = prompt ('what is you cities name?')
// citiestocheck = citiestocheck.tolowercase();
// for ( var i = 0;  i <=cities.length ; i++) {
//     if (citiestocheck === cities[i]) {
//         alert("it is one of clean cities");
//     }
// }

