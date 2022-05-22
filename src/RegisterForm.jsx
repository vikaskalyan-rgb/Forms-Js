import React,{Component} from "react";

class RegisterForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         PhoneNumber:'',
         Email:'',
         College:'',
         Course:''
      }
    }
    handleUsernameChange=(event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handlePhoneNumberChange=(event) =>{
        this.setState({
            PhoneNumber:event.target.value
            })
    }
    handleEmailChange=(event) =>{
        this.setState({
            Email:event.target.value
            })
    }
    handleCollegeChange=(event) =>{
        this.setState({
            College:event.target.value
            })
    }
    handleCourseChange = (event) =>{
        this.setState({
            Course:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`Hi ${this.state.username},You have successfully registered!`)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="appform">
                    <h1>Register !!</h1>
                    <lable>Username</lable>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/><br/><br/>

                    <lable>PhoneNumber</lable>
                    <input type='text' value={this.state.PhoneNumber} onChange={this.handlePhoneNumberChange}/><br/><br/>

                    <lable>EmailId</lable>
                    <input type='text' value={this.state.Email} onChange={this.handleEmailChange}/><br/><br/>

                    <lable>College</lable>
                    <input type='text' value={this.state.College} onChange={this.handleCollegeChange}/><br/><br/>
                  

                </div>
               
                <div>
                    <label>Course</label>
                    <select value={this.state.Course} onChange={this.handleCourseChange}>
                        <option value="CSE">COMPUTER SCIENCE</option>
                        <option value="IT">INFORMATION TECHNOLOGY</option>
                        <option value="E&I">ELECTRONICS & INSTRUMENTATION</option>
                        <option value="ECE">ELECTRONICS & COMMUNICATIONS</option>
                    </select>
                </div><br/><br/><br/>
                <button type="submit">Submit</button>
            </form>
        )}
}
export default RegisterForm