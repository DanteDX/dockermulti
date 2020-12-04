import React,{useState} from 'react';
import axios from 'axios';

const AllTasks = () => {
    const [task,setTask] = useState([]);
    const taskList = async () =>{
        try{
            const response = await axios.get("/api/get/");
            return (response.data);
        }catch(err){
            console.log(err);
        }
    }
    taskList()
        .then(responseData => {
            const taskList = responseData.map(eachObj => <li key={Math.random()}>{eachObj.task}</li>);
            setTask(taskList);
        });

    return (
        <ul>
            {task.length === 0 ? <p>No Entries yet</p> : task}
        </ul>
    )
}


export default AllTasks;
