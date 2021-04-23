//We should import npm i node-fetch --save

//we should put this variable before the fetching the URL const fetch = require("node-fetch");

const getRandomUsers=randomUsers=>{
    const fetch = require("node-fetch");
    const fetchRandomUsers=fetch(`https://randomuser.me/api/?results=${randomUsers}`)
    fetchRandomUsers.then(data=>{
        data.json().then(getRandomUsers=>{
            console.log(JSON.stringify(getRandomUsers.results.length))
            getRandomUsers.results.forEach(user=>{
                const {gender,email}=user;
                console.log(`${gender}-${email}`)

            })
        })
    })
}
getRandomUsers(20);