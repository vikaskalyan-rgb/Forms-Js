import React from "react";
import { Component } from "react";
class Hello extends Component{
    constructor(){
        super();
        this.state={
            firstName:'vikoo',
            lastName:'kalyan',
            dept:'cse',
            company:'guardian',
        }}
        render(){
            return(
                <div>
                    <h1>The first name is {this.state.firstName}</h1>
                </div>
            )
        }
    }
    export default Hello;
