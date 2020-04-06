import React, { Component } from 'react';
import './App.css';
import UpperBar from './upperBar/upperBar';
import ChoiceBar from './choiceBar/choiceBar';
import Ad from './ad/ad';
import Registration from './registration/registration';
import Console from './console/console';
import Cart from './cart/cart';
import PS from './console/PS.json';
import XBOX from './console/XBOX.json';
import NINTENDO from './console/NINTENDO.json';
import PC from './console/PC.json';
import SignIn from './signin/signin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      platform: "",
      cartNumber: 0,
      items: [],
      logedAc: "",
      loginOperation: "sign in"
    };
    this.commonReturn = this.commonReturn.bind(this);
    this.cartNumberUpdate = this.cartNumberUpdate.bind(this);
    this.cartDelete = this.cartDelete.bind(this);
    this.setStateChange = this.setStateChange.bind(this);
  }
  setStateChange(type1, value1, type2, value2, type3, value3) {
    this.setState({
      [type1]: value1,
      [type2]: value2,
      [type3]: value3,
    });
  }
  cartNumberUpdate(consoleType, id) {
    this.setState({
      cartNumber: this.state.cartNumber + 1
    });
    if (consoleType === "PS") {
      //console.log(PS[id]);
      this.state.items.push(PS[id])
    } else if (consoleType === "XBOX") {
      //console.log(XBOX[id]);
      this.state.items.push(XBOX[id])
    } else if (consoleType === "NINTENDO") {
      //console.log(NINTENDO[id]);
      this.state.items.push(NINTENDO[id])
    } else if (consoleType === "PC") {
      //console.log(PC[id]);
      this.state.items.push(PC[id])
    }
    //console.log(this.state.items);
  }
  cartDelete(obj) {
    this.setState({
      cartNumber: this.state.cartNumber - 1
    })
    this.state.items.splice(obj, 1);
    //console.log(this.state.items);
  }
  commonReturn(jsonFile) {
    return (
      <div className="App">
        <UpperBar setStateHandler={this.setStateChange} operation={this.state.loginOperation} logedName={this.state.logedAc} number={this.state.cartNumber} platformHandler={this.platformStateChanger} />
        <ChoiceBar setStateHandler={this.setStateChange} />
        <Console setStateHandler={this.setStateChange} changeCartNumber={this.cartNumberUpdate} file={jsonFile} />
      </div>
    );
  }
  render() {
    const MySubComponent = () => {
      return (
        <>
          <UpperBar setStateHandler={this.setStateChange} operation={this.state.loginOperation} logedName={this.state.logedAc} number={this.state.cartNumber} platformHandler={this.platformStateChanger} />
          <ChoiceBar setStateHandler={this.setStateChange} name={this.state.platform} />
        </>
      );
    }
    if (this.state.platform === "") {
      return (
        <div className="App">
          <MySubComponent />
          <Ad />
        </div>

      );
    } else if (this.state.platform === "PS") {
      return (this.commonReturn(PS));
    }
    else if (this.state.platform === "XBOX") {
      return (this.commonReturn(XBOX));
    } else if (this.state.platform === "NINTENDO") {
      return (this.commonReturn(NINTENDO));
    } else if (this.state.platform === "PC") {
      return (this.commonReturn(PC));
    }
    else if (this.state.platform === "signin") {
      return (
        <div className="App">
          <MySubComponent />
          <SignIn setStateHandler={this.setStateChange} />
        </div>
      );
    }
    else if (this.state.platform === "register") {
      return (
        <div className="App">
          <MySubComponent />
          <Registration />
        </div>
      );
    }
    else if (this.state.platform === "cart") {
      return (
        <div className="App">
          <MySubComponent />
          <Cart deleteHandler={this.cartDelete} array={this.state.items} />
        </div>
      );
    }
  }

}
export default App;
