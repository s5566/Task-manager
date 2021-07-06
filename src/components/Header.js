import Button from './Button'
// import Counter from './Counter'
import {useState} from 'react'
const Header = ({title,onbutton}) => {
    // const [count,setCount] =useState(0)
        
    //         const click =() =>
    //         { 
                 
        
                
                
    //             setCount(prevCount => prevCount +1);
               
    //         }
        
    
   
   
    return (
        <header className="header">
            <h1>{title} </h1>
            {/* <Counter counter={count}/> */}
            {/* <Button color='orange' text='Add' onClick={onbutton}/> */}
        </header>
    )
}
Header.defaultProps={
    title: "Task manager",
  }
export default Header

