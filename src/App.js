import React, { Component } from 'react';

import './App.css';
import UpperBar from './upperBar/upperBar';
import ChoiceBar from './choiceBar/choiceBar';
import Ad from './ad/ad';
import Registration from './registration/registration';
class App extends Component{
  constructor(){
    super();
    this.state={
        platform: ""
    };
    this.platformStateChanger = this.platformStateChanger.bind(this);
    this.commonReturn = this.commonReturn.bind(this);

  }
  platformStateChanger(variable){
    this.setState({
      platform: variable
    });
  }
  commonReturn(){
    return(
      <div className="App">
        <UpperBar platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger}/>
      </div>
    );
  }
  render(){
    
    if(this.state.platform===""){
      return(
        <div className="App">
        <UpperBar platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger} name={this.state.platform}/>
        <Ad/>
        </div>
        
      );
    }else if(this.state.platform==="PS"){
      return(this.commonReturn());
    }
    else if(this.state.platform==="XBOX"){
      return(this.commonReturn());
    }else if(this.state.platform==="NINTENDO"){
      return(this.commonReturn());
    }else if(this.state.platform==="PC"){
      return(this.commonReturn());
    }
    else if(this.state.platform==="signin"){
      return(
        <div className="App">
        <UpperBar platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger} name={this.state.platform}/>
        </div>
      );
    }
    else if(this.state.platform==="register"){
      return(
        <div className="App">
        <UpperBar platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger} name={this.state.platform}/>
        <Registration/>
        </div>
        
      );
    }
  }
  
}

export default App;
