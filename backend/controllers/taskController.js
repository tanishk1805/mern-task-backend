const Task=require("../model/taskModel")

const express=require("express")

//Create a Task
// "/api/v1/task" To create a public api
const createTask=async(req,res)=>{
    try{
        const task=await Task.create(req.body);
        res.status(200).json(task)
        }
        catch(err){
            res.status(500).json({msg:err.message})
    
        }
}


//Get a task// or Read 
const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.find();
        res.status(200).json(tasks);
        
    } catch (error) {
        res.status(500).json({msg:error.message});
        
    }
}
// Get a single task
const getTask=async(req,res)=>{
    try {
        const {id}=req.params;
        const task=await Task.findById(id);
        res.status(200).json(task);
        if(!task){
             return res.status(404).json(`id not found:${id}`)
        }
       
        
    } catch (error) {
        res.status(500).json({msg:error.message});
    }

}

//Delete a task
const deleteTask=async(req,res)=>{
    try {
        const {id}=req.params;
        const task=await Task.findByIdAndDelete(id);
        res.send("Task deleted")
        if(!task){
             return res.status(404).json(`id not found:${id}`)
        }
       
        
    } catch (error) {
        res.status(500).json({msg:error.message});
    }

}

//Update a task
const updateTask=async(req,res)=>{
    try {
        const {id}=req.params;
        const task=await Task.findByIdAndUpdate({_id:id},req.body,{new:true,runValidators:true,}) 
        res.status(200).json(task);
        if(!task){
            return res.status(404).json(`id not found :${id}`)
        }




        }
       
        
     catch (error) {
        res.status(500).json({msg:error.message});
       
    }

}


module.exports={getTasks,createTask,getTask,deleteTask,updateTask};



