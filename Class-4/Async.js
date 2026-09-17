function getUser() {
    return new Promise((resolve, reject) => {
        let user = true;
        if (user) {
            reject(new Error("User is not found"))
        }
        else {
            resolve({
                username: "John Doe",
                role: "ML Engineer"
            })
        }
    })
}


// //fetch the data
async function getUserData() {
    try {
        console.log("Hello");
        const response = await getUser();
        console.log(response);
    }
    catch (error) {
        console.log(error.message);
    }
}

getUserData();
