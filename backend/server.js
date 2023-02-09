const express=require("express")
const dotenv=require("dotenv").config()
// const connectDB=require("./config/connectDB")  :It is required if we want connect connectDB.js 
const Task=require("./model/taskModel")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
const taskRoutes=require("./routes/taskRoute")

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:["http://localhost:3000","https://mern-task-app.onrender.com"]
}));
app.use("/api/task",taskRoutes);




//Routes
const PORT=process.env.PORT || "5000"
app.get("/",(req,res)=>{
    res.send("home page");
})


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`)
    })


})
.catch((err)=>{
    console.log(err);
});


