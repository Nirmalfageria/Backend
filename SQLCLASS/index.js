const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
  user: 'root',
  database: 'sqlclass',
  password:""
});
// let  getRandomuser=() => {
//   return [
//      faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//      faker.internet.password(),
//   ];
// }
// let q = "INSERT INTO user(id,username,email,password) VALUES ?";
// // let users =[["123b","123b_newuser","abc@gmail.comb","1234C"],["123c","123c_newuser","abc@gmail.comc","1235D"]]
// let data =[];
// for(let i=1;i<100;i++){
//   data.push(getRandomuser());
// }
app.listen("8080",()=>{
  console.log("app is listening")
})

app.get("/",(req,res)=>{
  res.send("Welcome")
})
// try{
// connection.query(q,[data], (err,result)=> {
//   if(err) throw err;
// console.log(result);
// });}
// catch(err){
// console.log(err);
// }
// connection.end();

