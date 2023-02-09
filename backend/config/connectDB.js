const dotenv=require("dotenv").config()
const mongoose=require("mongoose")
const connectDb=async()=>{
try {
    const connenct=await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB connected `)
    
} catch (error) {
    console.log(error)
    process.exit(1)
    
    
}
}
module.exports=connectDb;
// IT need to be kept in server.js to connect mongo db first and then server
// const startServer=async()=>{
//     try {
//         await connectDB();
//         app.listen(PORT,()=>{
//             console.log(`server running on ${PORT}`)
//         })

        
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// startServer();