import React, { useState } from 'react'
import ToDoLists from './ToDoLists'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const App=()=>{
    const [inputList,setInputList]=useState()
    const [Items,setItems]=useState([])
    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }

    const listOfItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,inputList]
        })
        setInputList('')
    }
    const deleteItems=(id)=>{
        console.log('deleted');
        setItems((oldItems)=>{
          return  oldItems.filter((arrayElements,index)=>{
                return index!==id;
            })
        })
    }
  return(
      <>
          <div className='main_div'>
            <div className='center_div'>
                <br/>
                <h1>ToDo List</h1>
                <input type='text' placeholder='Add an Item' onChange={itemEvent} value={inputList} />
                <Button className='newBtn' onClick={listOfItems}><AddIcon/></Button>
                <ol>
                    {/* <li>{inputList}</li> */}
                    {Items.map((itemVal,index)=>{
                     return   <ToDoLists 
                     text={itemVal}
                      id={index} 
                      key={index}
                    onSelect={deleteItems}/>
                    })}
                </ol>
                
            </div>
          </div>
      </>
  )
}

export default App;
