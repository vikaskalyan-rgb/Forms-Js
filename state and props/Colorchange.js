import React from "react";
import { useState } from "react";
const Colorchange =()=>{
    const[color,setColor] = useState("");
    return(
        <div className="Vikoo">
            <h2 Style="color:{color}">The color of sky is {color}!</h2>
            <button type="button" onClick={()=>setColor("black")} Style="color:black" >black</button>
            <button type="button" onClick={()=>setColor("red")} Style="color:red">red</button>
            <button type="button" onClick={()=>setColor("blue")} Style="color:blue">blue</button>
            <button type="button" onClick={()=>setColor("green")}Style="color:green">green</button>
        </div>
    )
}
export default Colorchange;