import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Add = () => {
    const {addTask}=useContext(TaskContext);
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const handelSubmit=(e)=>{
        e.preventDefault();
        addTask(title,body);
        setTitle('');
        setBody('');
    }
    return ( 
        <form onSubmit={handelSubmit}>
            <input type="text" required value={title} placeholder='Task title'
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input type="text" required value={body} placeholder='your task'
            onChange={(e)=>setBody(e.target.value)}
            />
            <input type="submit" value='add Task' />
        </form>
     );
}
 
export default Add;
