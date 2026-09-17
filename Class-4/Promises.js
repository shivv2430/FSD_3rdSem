// //Promises method


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


const promise2 = new Promise((resolve, reject) => {
    let order = true;
    if (order) {
        const user = {
            "Order id": 10,
            location: "Mohali",
            status: "completed"
        };
        resolve(user);
    }
    else {
        reject("Order is not placed");
    }
});
console.log(promise2);




const PromisesAll = [promise1, promise2];

//=============all===============
Promise.all(PromisesAll).then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("finally block");
    })


//=========allsettled===========    
Promise.allSettled(PromisesAll).then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("blocked");
    })



//=========race===========
Promise.race(PromisesAll).then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("block");
    })


//===========any================ 

Promise.any(PromisesAll).then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("finally block");
    })



