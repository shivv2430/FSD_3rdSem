console.log("Hello Shivii..... ")

//Synchronous nature of Javascript (ek sequenece mei chalna )
for (let i = 0; i < 10; i++) {
    console.log(i);
}



//Asynchronous Nature of Javascript (process execute hone mei time lagta hai )
console.log("ASync start");
setTimeout(() => {
    console.log("SetTimeout");
}, 2000)
console.log("ASync end");
