export default function Input({...props}) {
    return (
    <>
    <div>
      <input value={taskValue}
      onChange={(e) => setTaskValue(e.target.value)}></input>
    </div>
    </>
    )
}