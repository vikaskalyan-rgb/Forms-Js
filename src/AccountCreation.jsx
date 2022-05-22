
import React from 'react'

function MyForm(){
    const HandleLogin = ()=>{
        alert('login success!')
    }
    const HandleCancel = ()=>{
        alert('login not success and cancelled!')
    }

    return(
        <div className='myform'>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>Create your account!!</h1>
            <br/><br/>
            <label>First Name: 
                <input type="text" />
            </label><br/><br/>
            <label>Email id: 
                <input type="text" />
            </label><br/><br/>
            <label>Phone number: 
                <input type="text" />
            </label><br/><br/>
            <label>Profession: 
                <input type="text" />
            </label><br/><br/>
           
            <button type='submit' onClick={HandleLogin}>Submit</button>
            <button type='button' onClick={HandleCancel}>Cancel</button>

          
        </div>
    )}
export default MyForm;
