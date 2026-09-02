console.log("Hello Shivii..... ")

//Synchronous nature of Javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}



//Asynchronous Nature of Javascript
console.log("ASync start");
setTimeout(() => {
    console.log("SetTimeout");
}, 2000)
console.log("ASync end");
