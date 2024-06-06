const express = require('express')
const app = express();

let port = 3000;
app.listen(port ,()=>{
    console.log("App is listening on port")
})
// app.use((req,res)=>{
//     console.log("request received")
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code)
//     // res.send('Response has been sended')
// })
// app.get("/aboutus",(req,res)=>{
// res.send("Hi myself Nirmal Fageria")
// })

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params
    let code = `<h1>Welcome to the page @${username} and id:${id} `
    res.send(code)
})