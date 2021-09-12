import { useRef, useState } from "react";
import List from "./List"
import NewTask from "./NewTask"


function Main() {   
    const [data, setData] = useState([]);
    const [Load, setLoad] = useState();
    const [numTasks, setnumTasks] = useState(0);
    const input = useRef()

    function Add() {
        if (input.current.value === "") {
            alert("Please enter something.")
        }
        else {
            const array = data
            array.push(input.current.value)
            setData(array)
            setLoad(<List Remove={Remove} data={data}></List>)
            input.current.value = "" 
            setnumTasks(data.length)
        }


    }
    function Remove(e) {
        const ele = e.target.value
        const array = data
        var taskIndex = array.indexOf(ele);

        array.splice(taskIndex, 1);

        setData(array)
        setLoad(<List Remove={Remove} data={data}></List>)
        setnumTasks(data.length)
    }

    function KeyHandler(event) {
        if (event.charCode === 13) {
            Add();
        }
    }
    


    return (
 
        <div>
            <NewTask inp={input} KeyHandler={KeyHandler} Add={Add}/>
            <p>Tasks ({numTasks})</p>
            {Load}

        </div>

           
        
    );
}

export default Main;