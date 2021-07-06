
import Task from './Task'
   

const Tasks = ({tasks,onDelete,onToggle}) => {

    return (
        <>
        {tasks.map((t1)=>(
        <Task key={t1.id} task={t1} onDelete={onDelete} onToggle={onToggle}/>
        
        ))}    
        </>
    )
}

export default Tasks
