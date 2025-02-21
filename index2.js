const express = require("express")

const app = express()

function userMiddleWare(req, res, next){
    const username = req.headers.username
    const password = req.headers.password

    if (username != "saqib" && password != "pass") {
        res.status(403).json({
            msg:"incorrect input"
        })
    } else {
        next()
    }

}

function kidneyMiddleWare(req, res, next) {

    const kidneyid = req.query.kidneyid
  if(kidneyid != 1 && kidneyid != 2){
    res.status(403).json({
        msg: "incorrect inputs"
    })
  } else {
    next()
  }

}

app.get("/health-checkup", userMiddleWare, kidneyMiddleWare, function(req, res){
    res.send("Your heart is healthy")

})

app.listen(3000)
