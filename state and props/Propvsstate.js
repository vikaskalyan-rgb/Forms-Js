
import React, { useState } from "react";
const Prop=()=>{
        const text = "oru sooravali kilabiyadhe!";
        const[show,setShow] = useState(true);


        function handletoggle()
        {
             setShow(!show)
        }


        return(
            <div>
                <button type="button" onClick={handletoggle}>toggleMe</button>
                {show? <Welcome display = {text}/>:null}
            </div>
        )
}

function Welcome({display}){
    return(
    <div>
        <h1>{display}</h1>
    </div>)
    
}

export default Prop;