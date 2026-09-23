import EventEmitter from "node:events";

const emitter = new EventEmitter()

//Event registration 

//event creation --> object_name.on --> 2 argumnet --->1st-- .on , 2nd --

//callback-Anonysmous function
//OrderNAme,OrderPrice--> Parameters
emitter.on("OrderPlaced", (OrderName, OrderPrice) => {
    //template literal`
    console.log(`Order ${OrderName} Placed successfully with price ${OrderPrice}`)
})
// //event trigger ----> .emit method-- at last
// emitter.emit("OrderPlaced", "laptop", "1,56,000")


//Notification create
emitter.on('OrderPlaced', () => {
    console.log('Email sent successfully');
});

emitter.on('OrderPlaced', () => {
    console.log('Inventory updated');
});

emitter.emit("OrderPlaced", "i-phone", "1,56,000")