const Task=(props)=>{
    return( <div className='task' style={{backgroundColor: props.completed ?"green":"white"}}>
    <button onClick={()=>props.completeTask(props.id)} >Completed</button>
    <h1>{props.taskName}</h1>
    <button onClick={()=>props.deleteTask(props.id)}>x</button>
    </div>)
}
export default Task;