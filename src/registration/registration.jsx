import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './registration.css';
import Select from './select/select';
import SelectNumber from './selectNumber/selectNumber';
class Registration extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      account: "",
      password1: "",
      password2: "",
      country: "",
      countriesObject: {
        array: ["Poland", "United Kingdom", "United States", "Australia", "France", "Germany", "Sweden"],
        id: "countries",
        value: ""
      },
      monthsObject: {
        array: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        id: "months",
        value: "Month"
      },
      selectCountry: "",
      selectMonth: "",
      selectDay: "",
      selectYear: "",
      type: "password"
    }

    this.selectCountryChange = this.selectCountryChange.bind(this);
    this.selectMonthChange = this.selectMonthChange.bind(this);
    this.selectDayChange = this.selectDayChange.bind(this);
    this.selectYearChange = this.selectYearChange.bind(this);
  }
  inputChange(type, event) {
    for (const property in this.state) {
      if (type === property) {
        this.setState({
          [property]: event.target.value
        })
      }
    }
  }
  validate(idValue, classValue) {
    try {
      const node = ReactDOM.findDOMNode(this);
      const child = node.querySelector(idValue);
      child.className = classValue;
    } catch (e) {
      console.log(e);
    }
  }
  selectImplement(select, id, hidden, visible) {
    try {
      if (select === "" || select.e === "none") {
        this.validate(id, "incorrect");
        this.showHideTooltip(hidden, visible);
      } else {
        this.validate(id, "correct");
        this.showHideTooltip(visible, hidden);

      }
    } catch (e) {
      console.log(e);
    }
  }
  displayData() {
    //console.log(this.state.selectCountry.e);
    if (this.state.email.match(/^[a-z0-9\._\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}$/) === null) {
      this.validate("#email", "incorrect");
      this.showHideTooltip("hiddenTooltip1", 'visibleTooltip1');
    } else {
      this.validate("#email", "correct");
      this.showHideTooltip("visibleTooltip1", 'hiddenTooltip1');
    }
    if (this.state.account.match(/^[a-zA-Z0-9\.\-_]{4,10}$/) === null) {
      this.validate("#ac-name", "incorrect");
      this.showHideTooltip("hiddenTooltip2", 'visibleTooltip2');
    } else {
      this.validate("#ac-name", "correct");
      this.showHideTooltip("visibleTooltip2", 'hiddenTooltip2');
    }
    if (this.state.password1.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\.\-_@$!%*#?&])[A-Za-z\d\.\-_@$!%*#?&]{8,13}$/) === null) {
      this.validate("#password", "incorrect");
      this.showHideTooltip("hiddenTooltip3", 'visibleTooltip3');
    } else {
      this.validate("#password", "correct");
      this.showHideTooltip("visibleTooltip3", 'hiddenTooltip3');

    }
    if (this.state.password2 === this.state.password1 && this.state.password2 !== "") {
      this.validate("#confirm-password", "correct");
      this.showHideTooltip("visibleTooltip4", 'hiddenTooltip4');

    }
    else {
      this.validate("#confirm-password", "incorrect");
      this.showHideTooltip("hiddenTooltip4", 'visibleTooltip4');
    }
    this.selectImplement(this.state.selectCountry, "#countries", "hiddenTooltip5", "visibleTooltip5");
    this.selectImplement(this.state.selectMonth, "#months", "hiddenTooltip6", "visibleTooltip6");
    this.selectImplement(this.state.selectDay, "#days", "hiddenTooltip6", "visibleTooltip6");
    this.selectImplement(this.state.selectYear, "#years", "hiddenTooltip6", "visibleTooltip6");
  }
  showHideTooltip(name, newId) {
    try {
      const node = ReactDOM.findDOMNode(this);
      const child = node.querySelector('#' + name);
      child.id = newId;
    } catch (e) {
      console.log(e);
    }
  }
  selectCountryChange(e) {
    this.setState({
      selectCountry: { e }
    })
  }
  selectMonthChange(e) {
    this.setState({
      selectMonth: { e }
    })
  }
  selectDayChange(e) {
    this.setState({
      selectDay: { e }
    })
  }
  selectYearChange(e) {
    this.setState({
      selectYear: { e }
    })
  }
  render() {

    return (
      <div class="registration">
        <div class="app-form">
          <form id="form">
            <div class="one-line">
              <div class="left">
                <h1>e-mail adress</h1>
              </div>
              <div class="right">
                <input id="email" onFocus={() => this.showHideTooltip("hiddenTooltip1", 'visibleTooltip1')} onBlur={() => this.showHideTooltip("visibleTooltip1", 'hiddenTooltip1')} onChange={(e) => this.inputChange("email", e)} type="text" value={this.state.email} /><div id="hiddenTooltip1">Please enter correct email adress</div>
              </div>
            </div>
            <div class="one-line">
              <div class="left">
                <h1>account name</h1>
              </div>
              <div class="right">
                <input id="ac-name" onFocus={() => this.showHideTooltip("hiddenTooltip2", 'visibleTooltip2')} onBlur={() => this.showHideTooltip("visibleTooltip2", 'hiddenTooltip2')} onChange={(e) => this.inputChange("account", e)} type="text" value={this.state.account} /><div id="hiddenTooltip2">Username must consist of 4-10 characters which are either digits, letters or -_.</div>
              </div>
            </div>
            <div class="one-line">
              <div class="left">
                <h1>password</h1>
              </div>
              <div class="right">
                <input id="password" onFocus={() => this.showHideTooltip("hiddenTooltip3", 'visibleTooltip3')} onBlur={() => this.showHideTooltip("visibleTooltip3", 'hiddenTooltip3')} onChange={(e) => this.inputChange("password1", e)} type="text" value={this.state.password1} /><div id="hiddenTooltip3">Password must consist of 8-13 letters, cointain: one upper and lower case letter, one digit, one special character</div>

              </div>
            </div>
            <div class="one-line">
              <div class="left">
                <h1>confirm password</h1>
              </div>
              <div class="right">
                <input id="confirm-password" onFocus={() => this.showHideTooltip("hiddenTooltip4", 'visibleTooltip4')} onBlur={() => this.showHideTooltip("visibleTooltip4", 'hiddenTooltip4')} onChange={(e) => this.inputChange("password2", e)} type="text" value={this.state.password2} /><div id="hiddenTooltip4">This field must match your password</div>
              </div>
            </div>
            <div class="one-line">
              <div class="left">
                <h1>country</h1>
              </div>
              <div class="right">

                <Select tooltipShowHandler={() => this.showHideTooltip("hiddenTooltip5", 'visibleTooltip5')} tooltipHideHandler={() => this.showHideTooltip("visibleTooltip5", 'hiddenTooltip5')} array={this.state.countriesObject.array} selectHandler={this.selectCountryChange} id={this.state.countriesObject.id} value={this.state.countriesObject.value} />
                <div id="hiddenTooltip5">Please select a correct option</div>
              </div>
            </div>
            <div class="one-line">
              <div class="left">
                <h1>date of birth</h1>
              </div>
              <div class="right">
                <SelectNumber tooltipShowHandler={() => this.showHideTooltip("hiddenTooltip6", 'visibleTooltip6')} tooltipHideHandler={() => this.showHideTooltip("visibleTooltip6", 'hiddenTooltip6')} id="days" selectHandler={this.selectDayChange} start={1} end={31} value="Days" increment={1} />
                <Select tooltipShowHandler={() => this.showHideTooltip("hiddenTooltip6", 'visibleTooltip6')} tooltipHideHandler={() => this.showHideTooltip("visibleTooltip6", 'hiddenTooltip6')} array={this.state.monthsObject.array} selectHandler={this.selectMonthChange} id={this.state.monthsObject.id} value={this.state.monthsObject.value} />
                <SelectNumber tooltipShowHandler={() => this.showHideTooltip("hiddenTooltip6", 'visibleTooltip6')} tooltipHideHandler={() => this.showHideTooltip("visibleTooltip6", 'hiddenTooltip6')} id="years" selectHandler={this.selectYearChange} start={2020} end={1920} value="Years" increment={-1} />
                <div id="hiddenTooltip6">Please select a correct option</div>
              </div>

            </div>


          </form>
          <button onClick={() => this.displayData()}>Register</button>
        </div>
      </div>
    );
  }
}
export default Registration;