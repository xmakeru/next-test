export default function Task(props) {
    return(
        <div key={props.id}>
            <input type="checkbox" onClick={() => props.toggleTask(props.id)} defaultChecked={props.status}/>
            <p style={props.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.value}</p>
            <button onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
    )
}