



// chap 35

// function tellTime() {
//     var now = new Date();
//     var hour = now.getHours();
//     var minutes = now.getMinutes();
//     alert("current time: " + hour + ":" +minutes);   
// } 
// tellTime();


//chap 36



// a variable inside the () is called parameter
// a string inside the () is called argument
// function greetuser(){
//     alert("Hello, there.");
// }
// greetuser("Hello, there.");


// function greetuser(greeting){
//         alert(greeting);
//     }
//     var greeting= "hello , world.";
//     greetuser(greeting);



// pratice questionS of Function 
// STARTED

// function findcube(num){
//     console.log(num * 2);
// }
// findcube(3)




// IT WILL SHOW AHEMD HOW CAN I HELP U BCZ MSG IS ALREADY DEFINE IN PARAMETER
// function showmsg(username, msg='how can i help u'){
//    console.log(username + " " + msg)
// }
// showmsg("AHMED" , "ASSALAMUALIKUM" )



// IT WILL SHOW AHMED ASSALAMUALIKUM BCZ IT OVEREIDE THE MSG PARAMETER
// function showmsg(username, msg='how can i help u'){
//     console.log(username + " " + msg)
//  }
//  showmsg("AHMED" , "ASSALAMUALIKUM" )


// The argument object contains an array of the arguments used when the function was called (invoked).


// function letMeKnowYourWishes() {
//     console.log(arguments);
// }
// letMeKnowYourWishes("no traffic", "dinner biryani", "petrol 50Liter");




// function makefruitchart() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log("crush" + arguments[i])
//     }
// }
// makefruitchart(" banana ", " mango ")


// PRATICE FINISHED


// CHAP 37
// function total(buyu){
//     var orderu;
//     if (buyu >= 100) {
//         orderu = buyu;
//     } 
//     else if(buyu < 50.01) {
//         orderu = buyu + 5;
//     }
//     else {
//         orderu = buyu + 5 + (0.3 * (buyu - 50))
//     }
//     return orderu;
// }
// ways to show results
// 1
// alert(total(70));


//2
// var total1 = total(70);  
// console.log(total1); 


// 3
// console.log(total(70));


// examples 

// function add2num(num1,num2){
//     let sum = num1 + num2;
//     return sum;
    // console.log(sum)
// }
// let findsum = add2num(2,3);
// console.log(findsum);

// or direct call it in log

// console.log(add2num(5,4));


// CHAP 38

// var user = 'akram';
// function repalcename(){
//     var user;
//     if (true) {
//         var user = 'ali';
        
//     }
//     console.log(user);
// }
// repalcename()


// var thesum = 1000; 
// addnubmer();
// function addnubmer(){
//     var thesum = 2 + 2;
// } 
// alert(thesum);


// var thesum = addnubmer();
// function addnubmer(){
//     var thesum = 2 + 2;
//     return thesum;
// }
// console.log(thesum)




// var theSum();
// console.log(theSum(3));

// function addNumbers() {
//     theSum = 2 + 2;
// }
// addNumbers();
// console.log(theSum);

// const greet = "hi";
// console.log(greet)