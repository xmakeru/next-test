export default function Input({props}) {
    return (
    <>
    <div>
      <input value={props.taskValue}
      onChange={(e) => props.setTaskValue(e.target.value)}></input>
    </div>
    </>
    )
}