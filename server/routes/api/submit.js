const express = require('express');
const router = express.Router();
const Task = require("../../model/Task");

router.post("/",async (req,res)=>{
    const task = req.body.task;
    try{
        const newTask = new Task({task});
        const addedTask = await newTask.save();
        res.json(addedTask);

    }catch(err){
        console.log(err);
        res.json({'msg':"There was error with posting"});
    }
})

module.exports = router;