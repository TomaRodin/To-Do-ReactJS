function NewTask(props) {

    return (
        <div>
            <input placeholder="New task:" ref={props.inp}  onKeyPress={props.KeyHandler}  />
            <button onClick={props.Add} >Add</button>
        </div>
    )
}

export default NewTask;