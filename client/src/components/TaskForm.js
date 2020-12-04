import React from 'react';
import axios from 'axios';

const TaskForm = () =>{
    const submitHandler = async(e) =>{
        e.preventDefault();
        const task = e.target.taskFormInput.value;
        e.target.taskFormInput.value = "";
        const body = {task};
        const config = {
            "headers":{
                "Content-Type":"application/json"
            }
        }
        try{
            const res = await axios.post("/api/submit",JSON.stringify(body),config);
            console.log(res.data);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <form className="taskForm" onSubmit={e => submitHandler(e)}>
            <input type="text" id="taskFormInput" name="taskFormInput" />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm;