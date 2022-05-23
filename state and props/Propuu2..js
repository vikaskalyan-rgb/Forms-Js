import React from "react";
function Hello(){
    return(
        <div>
            <Welcome name="vikudu"/>
        </div>
    )
}

function Welcome({name})
{
    return(
    <h1>my name is {name}</h1>
    )
}

//this is user defined prop

export default Hello;