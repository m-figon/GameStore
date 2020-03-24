import React, { Component } from 'react';
import './registration.css';
class Registration extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div class="registration">
            <div class="app-form">
            <form id="form">
                <h1>e-mail adress</h1><input id="email" type="text" value=""/><div id="tooltip1">Please enter correct email adress</div>
                <h1>account name</h1><input id="ac-name" type="text" value=""/><div id="tooltip4">Username must consist of 4-10 characters which are either digits, letters or -_.</div>
                <h1>password</h1><input id="password" type="text" value=""/><div id="tooltip2">Password must consist of 8-13 letters, cointain: one upper and lower case letter, one digit, one special character</div>
                <h1>confirm password</h1><input id="confirm-password" type="text" value=""/><div id="tooltip3">This field must match your password</div>
                <h1>country</h1>
                <select id="country">
                  <option value="none"></option>
                  <option value="poland">Poland</option>
                  <option value="unitedstates">United States</option>
                  <option value="france">France</option>
                  <option value="germany">Germany</option>
                  <option value="russia">Russia</option>
                  <option value="sweden">Sweden</option>
                  <option value="norway">Norway</option>
                </select>
                <h1>date of birth</h1>
                <select id="day">
                  <option value="none">Day</option>
                </select>
                <select id="month">
                  <option value="none">Month</option>
                  <option value="jan">Jan</option>
                  <option value="feb">Feb</option>
                  <option value="mar">Mar</option>
                  <option value="apr">Apr</option>
                  <option value="may">May</option>
                  <option value="jun">Jun</option>
                  <option value="jul">Jul</option>
                  <option value="aug">Aug</option>
                  <option value="sep">Sep</option>
                  <option value="oct">Oct</option>
                  <option value="nov">Nov</option>
                  <option value="dec">Dec</option>
                </select>
                <select id="year">
                  <option value="none">Year</option>
                </select>
              </form>
            <button>Register</button>
            </div>
            </div>
        );
    }
}
export default Registration;