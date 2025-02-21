// calculate number of request


const express = require("express")

const app = express()

let numberofrequest = 0

function numberrequest(req, res, next) {
    numberofrequest ++
    console.log(numberofrequest)
    next()
}

app.get("/requests", numberrequest, function(req, res){
    res.json({
        msg: "request on each click"
    })
})

app.listen(3000)