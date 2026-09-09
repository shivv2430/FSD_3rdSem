export default function greet() {
    return "Hello World";
}

greet();

export const pi = 3.14;


export const e = 2.718;


//synchronous nature of code 

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Asynchronous Nature of code
console.log("Start");
setTimeout(() => {
    console.log("SetTimeout");
}, 2000)
console.log("End");