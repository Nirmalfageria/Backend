const express = require("express")
let app = express()
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method')); // Using '_method' as the query parameter
port =3000;
const path = require("path")

app.use(express.urlencoded({extended:true}))

app.set("view engine" ,"ejs")
app.set("views",path.join(__dirname ,"views"));
app.use(express.static(path.join(__dirname ,"public")))

let  posts =[
    {username:"Nirmal",id:uuidv4(),
        content : "I am a devevloper"
    },
    {username:"Nirmal fageria",id:uuidv4(),
    content : "I am a coder"
},
{username:"Amit",id:uuidv4(),
content : "I am a nuring student"
},
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs" ,{posts})
})
app.get("/posts/new" ,(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts" ,(req,res)=>{
    let {username ,content }= req.body;
    let id = uuidv4();
    posts.push({id,username,content})
    res.redirect("/posts")
    
})
app.get("/posts/:id" ,(req,res)=>{
    let {id} = req.params
    let post = posts.find((p)=>id ===p.id)
  if(post)  res.render("show.ejs",{post})
    else {
        res.status(404).send("Post not found");
    }

})
app.get("/posts/:id/edit" ,(req,res)=>{
    let {id} = req.params
    let post = posts.find((p)=>id ===p.id)  
    res.render("edit.ejs",{post} )
})
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex !== -1) {
        posts[postIndex].content = newContent;
        console.log(posts[postIndex]); // Debugging log
        res.redirect("/posts");
    } else {
        res.status(404).send("Post not found");
    }
});

app.listen(port,()=>{
    console.log("app is listening")
})
