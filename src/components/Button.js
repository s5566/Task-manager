import React from 'react'

const button = ({color,text,onClick}) => {
    return (
        <div>
             <button style={{backgroundColor:color}} className="btn" onClick={onClick}>{text}</button>
        </div>
    )
}

export default button
