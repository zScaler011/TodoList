import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const ToDoLists=(props,{line})=>{

    

    return (
        <div>
            <div style={{paddingTop:'20px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper style={{paddingTop:'10px',paddingBottom:'10px'}}> 
                            <h3>{props.itemval}</h3>
                            <button style={{color:'MediumSeaGreen',backgroundColor:'Black'}} className="ui secondary button"onClick={()=>{props.completeItems(props.id)}}>
                                Completed
                            </button>
                            <button style={{color:'white',backgroundColor:'red'}} className="ui secondary button"onClick={()=>{props.deleteItems(props.id)}}>
                                Delete
                            </button>
                            </Paper>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
        </div>
    ) 
}

export default ToDoLists;