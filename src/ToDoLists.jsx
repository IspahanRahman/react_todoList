import React, { useState } from 'react'
import Delete from '@material-ui/icons/Delete';
const ToDoLists=(props)=>{
  const [line,setline]=useState(false)
  const click=()=>{
      setline(true)
  }
    return (
        <>
        <div className='todo_style'>
        <Delete className="fa fa-times" aria-hidden="true" onClick={click}/>
        <li style={{textDecoration:line?"line-through":"none"}}>{props.text}</li>
        </div>
        </>
    )
}

export default ToDoLists