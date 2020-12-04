const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
});


module.exports = Task = mongoose.model('task',TaskSchema);