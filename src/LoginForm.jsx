import React,{Component} from "react";

class LoginForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
      }
    }
    handleUsernameChange=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    
    handleSubmit=(event)=>{
        alert(`Hi ${this.state.username},You have successfully Logged In!`)
    }
    render(){
      
        return(
            <form onSubmit={this.handleSubmit}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div><h1>Login</h1></div>
                <div className="appform">
                    <lable>Username</lable>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/><br/><br/>

                    <lable>Password</lable>
                    <input type='password'/><br/><br/>
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={(event)=>{
        alert(`Login Cancelled By the user! Thanks!`)
    }} >Cancel</button>
            </form>
        )}
}
export default LoginForm