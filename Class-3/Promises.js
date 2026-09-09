//Promisses : object that represents the eventual result of an asychronous operation.(show state of the async function)


//States of promise: 
//1.Pending state(by default)
//2.fulfilled state(success)
//3.rejected state(error)

//create promise

// let pr = new Promise((resolve, reject) => {
//     // resolve(value) -> If the operation is successful
//     //reject(error)   -> If the operation fails
// });
// console.log(pr);


const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        const user = {
            id: 1,
            name: "Shivani",
            age: 20
        };
        resolve(user);
    }
    else {
        reject("Operation is failed");
    }
});
console.log(promise1);

//success
promise1.then((response) => {
    console.log(response);
})
//failure
promise1.catch((error) => {
    console.log(error.message);
})
//both resolve and failure
promise1.finally(() => {
    console.log("finally block");
})