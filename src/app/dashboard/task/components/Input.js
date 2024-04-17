export default function Input(props) {
    return(
        <>
        <input value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}/>
        <button onClick={props.addTask}>Add</button>
        </>
    )
}

