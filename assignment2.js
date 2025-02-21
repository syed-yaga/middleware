const express = require("express")

const app = express()

let numberofrequest = 0
let totaltimeforeachrequest = 0

function responsetime(req, res, next) {
    const start = Date.now()
    res.on("finish", function(){
        const duration = Date.now() - start
        numberofrequest ++
        totaltimeforeachrequest += duration
        const averagerespnsetime = totaltimeforeachrequest / numberofrequest
        console.log(averagerespnsetime)
        
    })
    next()

}

app.get("/", responsetime, function(req, res){
    setTimeout(function(){
        res.send("Hello this request was processed")
    }, Math.random() * 1000)
})

app.get("/test", responsetime, function(req, res){
    setTimeout(function(){
        res.send("This is another test route")
    }, Math.random() * 500)
})

app.listen(3000)