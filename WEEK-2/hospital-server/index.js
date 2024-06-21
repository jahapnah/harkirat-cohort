const express = require("express");
const app = express();
const bodyParseer = require("body-parser");
app.use(express.json());

app.listen(3000, () => {
    console.log("App is listening at port : " + 3000);
})

// database
const user = [
    {
        name: "rishi",
        kidneys : [ {healthy:false}]
    } 
]

app.get("/", (req, res) => {
    const name = user[0].name;
    const rishiKidneys = user[0].kidneys;
    const noOfKidneys = rishiKidneys.length;
    let healthyKidneys = 0;

    for(let i = 0; i < noOfKidneys; i++){
        if(rishiKidneys[i].healthy){
            healthyKidneys++;
        }
    }

    const unHealthyKidneys = noOfKidneys - healthyKidneys;

    res.json({
        name,
        noOfKidneys,
        healthyKidneys,
        unHealthyKidneys
    })
})

app.post("/", (req,res) => {
    const isHealthy = req.body.isHealthy;
    console.log(isHealthy)
   
        user[0].kidneys.push({healthy:isHealthy});

    res.send("Done !!");
})

app.put("/", (req, res) => {
   let isHealthy = req.body.isHealthy;
   console.log(isHealthy);
   for(let i=0; i < user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy && isHealthy) {
            user[0].kidneys[i].healthy = isHealthy;
            break;
        }
        else{
            user[0].kidneys[i].healthy = isHealthy;
            break;
        }
   }
   res.json("Done");
})

app.delete("/", (req, res) => {
    const newKidneys = [];
    for(let i=0; i < user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy) {
            newKidneys.push({healthy:true});
        }
    }
    user[0].kidneys = newKidneys;
    res.send("Done !!");
})