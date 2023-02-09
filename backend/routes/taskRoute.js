const express=require("express");
const Task=require("../model/taskModel")

const router=express.Router();
const {getTasks,createTask,getTask,deleteTask,updateTask}=require("../controllers/taskController");


router.post("/",createTask);

router.get("/",getTasks);

router.get("/:id",getTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);
// patch method just for single field to be changed


module.exports=router;