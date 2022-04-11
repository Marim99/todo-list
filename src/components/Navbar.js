import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Add from "./AddTask";


const Navbar = () => {
    const { tasks}=useContext(TaskContext);

    return ( 
<div className="navbar">
    <h1 className="logo">Todo List</h1>
    <p>you have <span> {tasks.length}</span> task did't finish</p>
    <Add key={tasks.id}/>
</div>
     );
}
 
export default Navbar;