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
class App extends Component{
  constructor(){
    super();
    this.state={
        platform: "",
        cartNumber: 0,
        items: []
    };
    this.platformStateChanger = this.platformStateChanger.bind(this);
    this.commonReturn = this.commonReturn.bind(this);
    this.cartNumberUpdate = this.cartNumberUpdate.bind(this);

  }
  platformStateChanger(variable){
    this.setState({
      platform: variable
    });
  }
  cartNumberUpdate(consoleType,id){
    this.setState({
      cartNumber: this.state.cartNumber+1
    })
    if(consoleType==="PS"){
      console.log(PS[id]);
      this.state.items.push(PS[id])
    }else if(consoleType==="XBOX"){
      console.log(XBOX[id]);
      this.state.items.push(XBOX[id])
    }else if(consoleType==="NINTENDO"){
      console.log(NINTENDO[id]);
      this.state.items.push(NINTENDO[id])
    }else if(consoleType==="PC"){
      console.log(PC[id]);
      this.state.items.push(PC[id])
    }
  }
  commonReturn(jsonFile){
    return(
      <div className="App">
        <UpperBar number={this.state.cartNumber} platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger}/>
        <Console changeCartNumber={this.cartNumberUpdate} file={jsonFile}/>
      </div>
    );
  }
  render(){
    
    if(this.state.platform===""){
      return(
        <div className="App">
        <UpperBar number={this.state.cartNumber} platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger} name={this.state.platform}/>
        <Ad/>
        </div>
        
      );
    }else if(this.state.platform==="PS"){
      return(this.commonReturn(PS));
    }
    else if(this.state.platform==="XBOX"){
      return(this.commonReturn(XBOX));
    }else if(this.state.platform==="NINTENDO"){
      return(this.commonReturn(NINTENDO));
    }else if(this.state.platform==="PC"){
      return(this.commonReturn(PC));
    }
    else if(this.state.platform==="signin"){
      return(
        <div className="App">
        <UpperBar number={this.state.cartNumber} platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger} name={this.state.platform}/>
        </div>
      );
    }
    else if(this.state.platform==="register"){
      return(
        <div className="App">
        <UpperBar number={this.state.cartNumber} platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger} name={this.state.platform}/>
        <Registration/>
        </div>
        
      );
    }
    else if(this.state.platform==="cart"){
      return(
        <div className="App">
        <UpperBar number={this.state.cartNumber} platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger} name={this.state.platform}/>
        <Cart array={this.state.items}/>
        </div>
      );
    }
  }
  
}
export default App;
