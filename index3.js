const express = require("express")

const app = express()

const zod = require("zod")

const Schema = zod.array(zod.number())

app.use(express.json())

app.post("/health-checkup", function(req, res){
    const kidneys = req.body.kidneys
    const response = Schema.safeParse(kidneys)
    if (!response.success) {
        res.status(404).json({
            msg: "input is invalid"
        })
    } else {
        res.send({
            response
        })
    }
})


   
app.listen(3000)