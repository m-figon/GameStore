import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../registration/registration.css';


class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      account: "",
      password1: "",
      type: "password"
    }
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
  displayData() {
    let validateFlag = false;
    this.props.accounts.map((value) => {
      //console.log(value.name);
      //console.log(this.state.account);
      if (this.state.account === value.name && this.state.password1 === value.password) {
        this.validate("#ac-name", "correct");
        this.validate("#password", "correct");
        this.showHideTooltip('visibleTooltip1', "hiddenTooltip1");
        validateFlag = true;
        this.props.setStateHandler("loginOperation", "sign out", "logedAc", value.name);
      }
    });
    if (!validateFlag) {
      this.validate("#ac-name", "incorrect");
      this.validate("#password", "incorrect");
      this.showHideTooltip("hiddenTooltip1", 'visibleTooltip1');
    }
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
  passwordHideShow() {
    if (this.state.type === "password") {
      this.setState({
        type: "text"
      });
    } else if (this.state.type === "text") {
      this.setState({
        type: "password"
      });
    }
  }
  render() {

    return (
      <div class="registration">
        <div id="login" class="app-form">
          <form id="form">
            <div class="one-line">
              <div class="left">
                <h1>account name</h1>
              </div>
              <div class="right">
                <input id="ac-name" onChange={(e) => this.inputChange("account", e)} type="text" value={this.state.account} />
                <div id="hiddenTooltip1">Please enter correct account name and password</div>
              </div>
            </div>
            <div class="one-line">
              <div class="left">
                <h1>password</h1>
              </div>
              <div class="right">
                <input id="password" onChange={(e) => this.inputChange("password1", e)} type={this.state.type} value={this.state.password1} />
              </div>
            </div>
            <button type="button" id="show" onClick={() => this.passwordHideShow()}>SHOW</button>

          </form>

          <button onClick={() => this.displayData()}>Login</button>
        </div>
      </div>
    );
  }
}
export default SignIn;