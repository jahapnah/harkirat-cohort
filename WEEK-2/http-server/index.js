const express = require("express");
const bodyParser = require("body-parser")


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get("/route-handler", (req, res) => {
    // res.send("Hello world")
    res.json({
        name: "rishikant",
        age: 21,
        
    })
})

app.post("/conversations", (req, res) => {
    const data = req.body;
    console.log(data);
    res.send("Got the data")
})

app.post("/check", (req, res) => {
    const queryData = req.query.message;
    console.log(queryData);
    res.send({
        message:"I git the query params",
        data: queryData
    })
})


app.listen(port, ()=>{
    console.log(`App is listening at ${port}`);
});