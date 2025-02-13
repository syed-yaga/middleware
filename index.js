const express = require("express")

const app = express()

app.get('/health-checkup', function(req, res){

    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyid

    if(username != "suraiya" && password != "pass"){
        
        res.status(400).json({msg: "something is wrong with your kidney"})
        return
    }
        
      if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({msg: "something is wrong with your kidney"})
        return
      }
      
 
    
res.json({
    msg: "Everything is fine"
})
  

})

app.listen(3000)