import React from "react"
import { useState } from "react"
const State=()=>
{
    const [count,setCount] = useState(0)
    function increaseCount(){
        setCount(count+1)
    }
    function decreaseCount(){
        setCount(count-1)
    }
    return(
        <div>
            <p>number of times button has been</p>
            clicked = {count}
            <button type="button" onClick={increaseCount}>increase</button>
            <button type="button" onClick={decreaseCount}>decrease</button>
        </div>
    )
}
export default State;