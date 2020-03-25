import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './registration.css';
import Select from './select/select';
import SelectNumber from './selectNumber/selectNumber';
class Registration extends Component{
    constructor(){
        super();
        this.state={
          email: "",
          account: "",
          password1: "",
          password2: "",
          country: "",
          countriesObject: {
            array: ["Poland","United Kingdom","United States","Australia","France","Germany","Sweden"],
            id: "countries",
            value: ""},
          monthsObject: {
            array: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            id: "months",
            value: "Month"}
          
        }
        this.inputChange = this.inputChange.bind(this);
        this.displayData = this.displayData.bind(this);
        this.showHideTooltip = this.showHideTooltip.bind(this);
    }
    inputChange(type,event){
      if(type==="email"){
        this.setState({
          email: event.target.value
        })
      }else if(type==="account"){
        this.setState({
          account: event.target.value
        })
      }else if(type==="password1"){
        this.setState({
          password1: event.target.value
        })
      }else if(type==="password2"){
        this.setState({
          password2: event.target.value
        })
      }else if(type==="country"){
        this.setState({
          country: event.target.value
        })
      }
      
    }
    displayData(){
      alert("email: " + this.state.email + "\npassword1: " + this.state.password1)
    }
    showHideTooltip(name,newId){
      try{
        const node = ReactDOM.findDOMNode(this);
        const child = node.querySelector(name);
        child.id=newId;
      }catch(e){
        console.log(e);
      }
    }
    render(){
        return(
            <div class="registration">
            <div class="app-form">
            <form id="form">
                <h1>e-mail adress</h1><input id="email" onFocus={()=> this.showHideTooltip("#hiddenTooltip1",'visibleTooltip1')} onBlur={()=> this.showHideTooltip("#visibleTooltip1",'hiddenTooltip1')} onChange={(e) => this.inputChange("email", e)} type="text" value={this.state.email}/><div id="hiddenTooltip1">Please enter correct email adress</div>
                <h1>account name</h1><input id="ac-name" onFocus={()=> this.showHideTooltip("#hiddenTooltip2",'visibleTooltip2')} onBlur={()=> this.showHideTooltip("#visibleTooltip2",'hiddenTooltip2')} onChange={(e) => this.inputChange("account", e)} type="text" value={this.state.account}/><div id="hiddenTooltip2">Username must consist of 4-10 characters which are either digits, letters or -_.</div>
                <h1>password</h1><input id="password" onFocus={()=> this.showHideTooltip("#hiddenTooltip3",'visibleTooltip3')} onBlur={()=> this.showHideTooltip("#visibleTooltip3",'hiddenTooltip3')}onChange={(e) => this.inputChange("password1", e)} type="password" value={this.state.password1}/><div id="hiddenTooltip3">Password must consist of 8-13 letters, cointain: one upper and lower case letter, one digit, one special character</div>
                <h1>confirm password</h1><input id="confirm-password" onFocus={()=> this.showHideTooltip("#hiddenTooltip4",'visibleTooltip4')} onBlur={()=> this.showHideTooltip("#visibleTooltip4",'hiddenTooltip4')}onChange={(e) => this.inputChange("password2", e)} type="text" value={this.state.password2}/><div id="hiddenTooltip4">This field must match your password</div>
                <h1>country</h1>
                <Select array={this.state.countriesObject.array} id={this.state.countriesObject.id} value={this.state.countriesObject.value}/>
                <h1>date of birth</h1>
                <SelectNumber start={1} end={31} value="Days" increment={1}/>
                <Select array={this.state.monthsObject.array} id={this.state.monthsObject.id} value={this.state.monthsObject.value}/>
                <SelectNumber start={2020} end={1920} value="Years" increment={-1}/>
              </form>
            <button onClick={this.displayData}>Register</button>
            </div>
            </div>
        );
    }
}
//apply match function on input fields values after button click
//alert form information on screen after submit
export default Registration;