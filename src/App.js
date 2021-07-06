import Header from './components/Header'
import './App.css';
import {useState} from 'react';
import Noshow from './components/Noshow'
import Add from './components/Add'
import Tasks from './components/Tasks'
import Button from './components/Button'

function App() {
 const[show,setShow]=useState((false))
  const[task, setTask] = useState(
    [{
       
       
        id: 1,
        text: "Work",
        day: "date",
        time:"time",
        reminder: true,
      },
      {
        id: 2,
        text: "Work 1",
        day: "date",
        time:"time",

        reminder: true,
      }
    
    ]
        );
      //   const change =(e)=>
      //   {
          
      //   if(e.target.style.color==="green")
      //   {
      //     e.target.style.color = "black" ;
          
      //   }
      //   else{
      //     e.target.style.color="green";
      //   }
      // }
       
 // const [name,setName] =useState('paul');
 const delTask = (id) =>
 {
setTask(task.filter((t)=>t.id!==id))
 }

 const toreminder =(id)=>
 {
  
 setTask(task.map((t2)=>
t2.id===id? {...t2,reminder:!t2.reminder}:t2));
 }


 const onadd=(t)=>
 {
   const id=Math.floor(Math.random()*10000)+1
   const newT={id,...t}
   setTask([...task,newT])

 }


  return (
    <div className="container">
     <Header />
      
      {show ? <Add onAdd ={onadd}/>: ' '}
     {task.length>0?
      <Tasks tasks={task} onDelete={delTask} onToggle={toreminder}/>: <Noshow />}
      <Button color='orange' text={show?'Remove':'Add'} onClick={()=>setShow(!show)}/>
      
    </div>
    
  );
}

export default App;