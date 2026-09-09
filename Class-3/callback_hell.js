function getUser(id, callback) {
    setTimeout(() => {
        console.log("User Fetched");

        const user = {
            id: 1,
            name: "shivani",
        };

        callback(null, user);
    }, 1000);
}


function getProfile(user, callback) {
    setTimeout(() => {
        console.log("Profile Fetched");

        const profile = {
            id: 1,
            username: user.name,
            location: "New Delhi",
            interest: ["web dev", "data science", "AI"]
        };

        callback(null, profile);
    }, 1000);
}


function getPost(username, callback) {
    setTimeout(() => {
        console.log("Post Fetched");

        const post = ["post1", "post2", "post3"];

        callback(null, post);
    }, 1000);
}


getUser(1, (err, user) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(user);

    getProfile(user, (err, profile) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log(profile);

        getPost(profile.username, (err, post) => {

            if (err) {
                console.log(err);
                return;
            }

            console.log("Post:", post);
        });
    });
});

//callback ko resolve krne ke solution : 
//1.  Promises
//2.  async/await