import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const TodoList = () => {
    const {tasks}=useContext(TaskContext);
    const { removeTask } = useContext(TaskContext);
    return tasks.length?( 
        <div className="container">
           {tasks.map(task => {
          return ( 

        <div className="task" >
              <h3>{task.title}</h3>
              <p>{task.body}</p>
              <li onClick={()=>removeTask(task.id)}>finish</li>
          </div>
            );
            })}
        </div>
     ):
     <div className="empty">No taska to do. Hello free time :)
     <div className="img"></div>
     </div>
     ;
}
 
export default TodoList;