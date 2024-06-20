// chap 31


// The statement above creates something called a Date object


// var rightNow = new Date();
// console.log(rightNow)




// DIRECT METHOD


// var rightNow = new Date();
// var theday = rightNow.getDay();
// console.log(theday);




// FIND DAY FROM OBJECT



// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var rightNow = new Date();
// var theday = rightNow.getDay();
// var nameoftoday = dayNames [theday];
// console.log(nameoftoday);




// CHAP 32 



// var rightNow = new Date();
// var theday = rightNow.getMonth();
// console.log(theday);




// var rightNow = new Date();
// var theday = rightNow.getDate();
// console.log(theday);




// var rightNow = new Date();
// var theday = rightNow.getFullYear();
// console.log(theday);




// var rightNow = new Date();
// var theday = rightNow.getHours();
// console.log(theday);




// var rightNow = new Date();
// var theday = rightNow.getMinutes();
// console.log(theday);



// var rightNow = new Date();
// var theday = rightNow.getSeconds();
// console.log(theday);



// var rightNow = new Date();
// var theday = rightNow.getMilliseconds();
// console.log(theday);



//getTime gives you the number of milliseconds that have elapsed since midnight, Jan. 1,1970.


// var rightNow = new Date();
// var theday = rightNow.getTime();
// console.log(theday);



// var today = new Date();
// var future = new Date("OCTUBER 30, 2026");
// var mtoday = today.getTime();
// var mfuture = future.getTime();
// var diff = mfuture - mtoday;
// console.log(diff);




// shortcut
// var diff = new Date("OCTUBER 30, 2026") - new Date();
// var now = Math.floor(diff/(1000*60*60*24*30*12));
// console.log(now);




// var rightNow = new Date( "october 20, 2024");
// var theday = rightNow.setMonth(9);
// console.log(rightNow);
// rightNow.setDate(4);
// console.log(rightNow);




// var rightNow = new Date();
// rightNow.setDate(14);
// console.log(rightNow);




// var d = new Date();
// var theday = d.setFullYear(2005);
// console.log(theday);




// var rightNow = new Date();
// var theday = rightNow.setHours(8);
// console.log(theday);




// var rightNow = new Date();
// var theday = rightNow.setMinutes(24);
// console.log(theday);



// var rightNow = new Date();
// var theday = rightNow.setSeconds(2222);
// console.log(theday);




// var rightNow = new Date();
// var theday = rightNow.setMilliseconds(121332323);
// console.log(theday);
