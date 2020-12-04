const express = require('express');
const router = express.Router();
const Task = require("../../model/Task");

router.get("/", async (req,res) =>{
    try{
        const allTasks = await Task.find().sort({data: -1});
        res.json(allTasks);
    }catch(err){
        console.log(err);
        res.json({'msg':'Error with getting data from database'});
    }
})

module.exports = router;