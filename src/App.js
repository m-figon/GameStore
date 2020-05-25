import React, { Component } from 'react';
import './App.css';
import UpperBar from './upperBar/upperBar';
import ChoiceBar from './choiceBar/choiceBar';
import Ad from './ad/ad';
import Registration from './registration/registration';
import Console from './console/console';
import Cart from './cart/cart';
import SignIn from './signin/signin';
 import { Route } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      cartNumber: 0,
      items: [],
      logedAc: "",
      loginOperation: "sign in",
      linkDirection: "/Login",
      accounts: [],
      PS: [],
      XBOX: [],
      PC: [],
      NINTENDO: []
    };
    this.cartNumberUpdate = this.cartNumberUpdate.bind(this);
    this.cartDelete = this.cartDelete.bind(this);
    this.setStateChange = this.setStateChange.bind(this);
  }
  jsonFetch(http,array){
    fetch(http)
    .then(response => response.json())
    .then(json => {
      this.setState({
        [array]: json
      });
    })
  }
  componentDidMount() {
    this.jsonFetch('http://www.mocky.io/v2/5ec983163000000d00a6cdf9','accounts');
    this.jsonFetch('http://www.mocky.io/v2/5ec983543000007900a6cdfb','PS');
    this.jsonFetch('http://www.mocky.io/v2/5ec9836c3000006300a6cdfc','XBOX');
    this.jsonFetch('http://www.mocky.io/v2/5ec983383000009700a6cdfa','PC');
    this.jsonFetch('http://www.mocky.io/v2/5ec982cf3000009700a6cdf8','NINTENDO');

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
      this.state.items.push(this.state.PS[id])
    } else if (consoleType === "XBOX") {
      //console.log(XBOX[id]);
      this.state.items.push(this.state.XBOX[id])
    } else if (consoleType === "NINTENDO") {
      //console.log(NINTENDO[id]);
      this.state.items.push(this.state.NINTENDO[id])
    } else if (consoleType === "PC") {
      //console.log(PC[id]);
      this.state.items.push(this.state.PC[id])
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
  render() {
    const MySubComponent = () => {
      return (
        <>
          <UpperBar setStateHandler={this.setStateChange} direction={this.state.linkDirection}  operation={this.state.loginOperation} logedName={this.state.logedAc} number={this.state.cartNumber} platformHandler={this.platformStateChanger} />
          <ChoiceBar setStateHandler={this.setStateChange} name={this.state.platform} />
        </>
      );
    }
    const HomeComponent = () => {
      return (
        <div className="App">
          <MySubComponent />
          <Ad />
        </div>
      );
    }
    const PlatformComponent = (props) => {
      return (
        <div className="App">
        <UpperBar setStateHandler={this.setStateChange} direction={this.state.linkDirection} operation={this.state.loginOperation} logedName={this.state.logedAc} number={this.state.cartNumber} platformHandler={this.platformStateChanger} />
        <ChoiceBar setStateHandler={this.setStateChange} />
        <Console setStateHandler={this.setStateChange} changeCartNumber={this.cartNumberUpdate} file={props.jsonFile} />
      </div>
      );
    }
    const LoginComponent = () => {
      return (
        <div className="App">
          <MySubComponent />
          <SignIn accounts={this.state.accounts} setStateHandler={this.setStateChange}/>
        </div>
      );
    }
    const RegisterComponent = () => {
      return (
        <div className="App">
          <MySubComponent />
          <Registration />
        </div>
      );
    }
    const CartComponent = () => {
      return (
        <div className="App">
          <MySubComponent />
          <Cart deleteHandler={this.cartDelete} array={this.state.items} />
        </div>
      );
    }
      
      return(
        <>
        <Route exact path="/" component={HomeComponent}/>
        <Route exact path="/PS" component={() => <PlatformComponent jsonFile={this.state.PS}/>}/>
        <Route exact path="/XBOX" component={() => <PlatformComponent jsonFile={this.state.XBOX}/>}/>
        <Route exact path="/NINTENDO" component={() => <PlatformComponent jsonFile={this.state.NINTENDO}/>}/>
        <Route exact path="/PC" component={() => <PlatformComponent jsonFile={this.state.PC}/>}/>
        <Route exact path="/Login" component={LoginComponent}/>
        <Route exact path="/Register" component={RegisterComponent}/>
        <Route exact path="/Cart" component={CartComponent}/>
        </>
      );
        
    
      
    
  }

}
export default App;
