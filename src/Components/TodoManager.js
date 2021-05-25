import React,{useState} from 'react';
import ToDoLists from './TodoLists';
const TodoManager=()=>{
    
    const [inputList, setInputList] = useState('');
    
    const [items,setItems]=useState([]);

    const onInputChange=(event)=>{
       // console.log(event.target.value);
        setInputList(event.target.value)

    }
   
    const listOfItems=()=>{
        setItems((oldItems)=>{
           return [...oldItems,inputList]
        })
        setInputList('')
    }
    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            })
        })
    }
    
    const completeItems=(id)=>{
        setItems((items)=>{
            return items.map((arrElem,index)=>{
                return  <div style={{textDecoration: id===index ?'line-through':'none'}}>{arrElem}</div>
            })
        })
        }

  
    return(
        <div>
            
            <h1 style={{color:'white',paddingTop:'20px',paddingBottom:'20px'}}>ToDo List</h1>
            <div className="ui action input">
                <input type="text" placeholder="Add a ToDo" value={inputList} onChange={onInputChange}/>
                <button className="ui button" 
                    style={{color:'White',background:'DodgerBlue'}}
                    onClick={listOfItems}>
                    Add
                </button>
            </div>
            <div>
                <ol>
                    {
                        items.map((itemval,index)=>{
                            return <ToDoLists 
                                    itemval={itemval}
                                    key={index}
                                    id={index}
                                    deleteItems={deleteItems}
                                    completeItems={completeItems}

                                    
                            />
                        })
                    }
                </ol>
            </div>
        </div>
        
    )
}
        

export default TodoManager;