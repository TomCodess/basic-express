const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Hellow World!'));

//Make a /cities route which we add to the end of the url to get something specific
app.get("/cities", (req,res) => {
    //array of cities 
    const cities = [
        {
            id: 1,
            name: "New York"
        },
        {
            id: 2,
            name: "Atlanta"
        },
        {
            id:3,
            name: "Toyko"
        },
    ];
    //res = return, res.json = return in json format i think
    res.json(cities);
});

//Param 1 is the route, param 2 is headers? idk we just add auth to it to make it work
app.get("/secrets",isAuth,(req,res) => {
    const secrets = [
        {
            id:1,
            name:"Hanni Pham #1"
        },
        {
            id:2,
            name:"Jo Yuri"
        },
    ];
    res.json(secrets);
});

function isAuth(req,res,next) {
    const auth = req.headers.authorization;
    if(auth == 'password'){
        next();
    } else {
        res.status(401);
        res.send("DONT LOOK");
    }
}




app.listen(port, () => console.log(`Express app running on port ${port}!`));