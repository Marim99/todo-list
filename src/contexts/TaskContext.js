import React ,{createContext,useEffect,useState} from 'react';
import uuid from 'uuid/v1';
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
const [tasks,setTask]=useState([
    {title:'Study Math',body:'take 1 leason from book and solve twenty q',id:1},
    {title:'Study Math',body:'take 2 leason from book and solve twenty q',id:2},
]);
const addTask=(title,body)=>{
    setTask([...tasks,{title,body,id:uuid()}])
};
const removeTask=(id)=>{
setTask(tasks.filter(task=>task.id!==id));
}

useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
},[tasks]);
    return ( 
        <TaskContext.Provider value={{tasks,addTask,removeTask}}>
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskContextProvider;