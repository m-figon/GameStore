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
            value: "Month"},
            selectCountry: "",
        }
        this.inputChange = this.inputChange.bind(this);
        this.displayData = this.displayData.bind(this);
        this.showHideTooltip = this.showHideTooltip.bind(this);
        this.selectChange = this.selectChange.bind(this);

    }
    inputChange(type,event){
      for (const property in this.state) {
        if(type==property){
          this.setState({
            [property]: event.target.value
          })
        }
      }
    }
    validate(idValue,classValue){
      try{
        const node = ReactDOM.findDOMNode(this);
        const child = node.querySelector(idValue);
        child.className=classValue;
      }catch(e){
        console.log(e);
      }
    }
    displayData(){
      console.log(this.state.selectCountry.e);
      
      (this.state.email.match(/^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/)==null)?
      this.validate("#email","incorrect"):this.validate("#email","correct");
      (this.state.account.match(/^[a-zA-Z0-9\.\-_]{4,10}$/)==null)?
      this.validate("#ac-name","incorrect"):this.validate("#ac-name","correct");
      (this.state.password1.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/)==null)?
      this.validate("#password","incorrect"):this.validate("#password","correct");
      (this.state.password2.match(this.state.password1)==null)?
      this.validate("#confirm-password","incorrect"):this.validate("#confirm-password","correct");
      try{
        ((this.state.selectCountry.match(undefined))||(this.state.selectCountry.match(null)))?
        this.validate("#countries","incorrect"):this.validate("#countries","correct");
      }catch(e){
        console.log(e);
      }
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
    selectChange(e){
      this.setState({
        selectCountry: {e}
      })
    }
    render(){
      
        return(
            <div class="registration">
            <div class="app-form">
            <form id="form">
                <h1>e-mail adress</h1><input id="email" onFocus={()=> this.showHideTooltip("#hiddenTooltip1",'visibleTooltip1')} onBlur={()=> this.showHideTooltip("#visibleTooltip1",'hiddenTooltip1')} onChange={(e) => this.inputChange("email", e)} type="text" value={this.state.email}/><div id="hiddenTooltip1">Please enter correct email adress</div>
                <h1>account name</h1><input id="ac-name" onFocus={()=> this.showHideTooltip("#hiddenTooltip2",'visibleTooltip2')} onBlur={()=> this.showHideTooltip("#visibleTooltip2",'hiddenTooltip2')} onChange={(e) => this.inputChange("account", e)} type="text" value={this.state.account}/><div id="hiddenTooltip2">Username must consist of 4-10 characters which are either digits, letters or -_.</div>
                <h1>password</h1><input id="password" onFocus={()=> this.showHideTooltip("#hiddenTooltip3",'visibleTooltip3')} onBlur={()=> this.showHideTooltip("#visibleTooltip3",'hiddenTooltip3')}onChange={(e) => this.inputChange("password1", e)} type="text" value={this.state.password1}/><div id="hiddenTooltip3">Password must consist of 8-13 letters, cointain: one upper and lower case letter, one digit, one special character</div>
                <h1>confirm password</h1><input id="confirm-password" onFocus={()=> this.showHideTooltip("#hiddenTooltip4",'visibleTooltip4')} onBlur={()=> this.showHideTooltip("#visibleTooltip4",'hiddenTooltip4')}onChange={(e) => this.inputChange("password2", e)} type="text" value={this.state.password2}/><div id="hiddenTooltip4">This field must match your password</div>
                <h1>country</h1>
                <Select array={this.state.countriesObject.array} selectHandler={this.selectChange} id={this.state.countriesObject.id} value={this.state.countriesObject.value}/>
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
//do same thing with months that you did with countries
//https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Polecenia/for...in
export default Registration;