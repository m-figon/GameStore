import React, { Component } from 'react';

import './App.css';
import UpperBar from './upperBar/upperBar';
import ChoiceBar from './choiceBar/choiceBar';
import Ad from './ad/ad';
import Registration from './registration/registration';
import Console from './console/console';
import PS from './console/PS.json';
import XBOX from './console/XBOX.json';
import NINTENDO from './console/NINTENDO.json';
import PC from './console/PC.json';
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
  commonReturn(jsonFile){
    return(
      <div className="App">
        <UpperBar platformHandler={this.platformStateChanger}/>
        <ChoiceBar platformHandler={this.platformStateChanger}/>
        <Console file={jsonFile}/>
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
//dodaj funkcjonalnosc koszyka
export default App;
