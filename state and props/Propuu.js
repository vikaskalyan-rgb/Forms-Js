import React from "react";
function Hi(){
    return(
        <div>
            <Welcome name="vikudu"/>
        </div>
    )
}

function Welcome(props)
{
    return(
    <h1>my name is {props.name}</h1>
    )
}

export default Hi;