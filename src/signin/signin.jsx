import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import accounts from './accounts.json';
import './signin.css';


class SignIn extends Component{
    constructor(){
        super();
        this.state={
          account: "",
          password1: "",
        }
        this.inputChange = this.inputChange.bind(this);
        this.displayData = this.displayData.bind(this);
        this.showHideTooltip = this.showHideTooltip.bind(this);
        this.selectImplement = this.selectImplement.bind(this);
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
    selectImplement(select,id,hidden,visible){
      try{
        if(select==="" || select.e==="none"){
          this.validate(id,"incorrect");
          this.showHideTooltip(hidden,visible);
        }else{
          this.validate(id,"correct");
          this.showHideTooltip(visible,hidden);

        }
      }catch(e){
        console.log(e);
      }
    }
    displayData(){
      accounts.map((value) => {
        console.log(value.name);
        console.log(this.state.account);
        if(this.state.account===value.name && this.state.password1===value.password){
          this.validate("#ac-name","correct");
          this.validate("#password","correct");
        }
      });
    }
    showHideTooltip(name,newId){
      try{
        const node = ReactDOM.findDOMNode(this);
        const child = node.querySelector('#'+name);
        child.id=newId;
      }catch(e){
        console.log(e);
      }
    }
    render(){
      
        return(
            <div class="login">
            <div class="sign-form">
            <form id="form">
                <h1>account name</h1><input id="ac-name"  onChange={(e) => this.inputChange("account", e)} type="text" value={this.state.account}/><div id="hiddenTooltip2">Username must consist of 4-10 characters which are either digits, letters or -_.</div>
                <h1>password</h1><input id="password" onChange={(e) => this.inputChange("password1", e)} type="text" value={this.state.password1}/><div id="hiddenTooltip3">Password must consist of 8-13 letters, cointain: one upper and lower case letter, one digit, one special character</div>
              </form>
            <button onClick={this.displayData}>Login</button>
            </div>
            </div>
        );
    }
}
//jak skonczysz rejestracje to zrob zeby przedmioty z zakladek konsol dodawane zmienialy grafike koszyka
export default SignIn;