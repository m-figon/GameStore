import React, { Component } from 'react';
import './choiceBar.css';
class ChoiceBar extends Component{
    constructor(){
        super();
        this.state={
            idPS: "",
            idXBOX: "",
            idNINTENDO: "",
            idPC: ""
        };
        this.changeClass = this.changeClass.bind(this);
    }
    changeClass(variable){
        if(variable==="PS"){
            this.setState({
                idPS: "selected",
                idXBOX: "",
                idNINTENDO: "",
                idPC: ""
            });
        }else if(variable==="XBOX"){
            this.setState({
                idPS: "",
                idXBOX: "selected",
                idNINTENDO: "",
                idPC: ""
            });
        }else if(variable==="NINTENDO"){
            this.setState({
                idPS: "",
                idXBOX: "",
                idNINTENDO: "selected",
                idPC: ""
            });
        }else if(variable==="PC"){
            this.setState({
                idPS: "",
                idXBOX: "",
                idNINTENDO: "",
                idPC: "selected"
            });
        }
        this.props.platformHandler(variable);
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.props.name==="" || this.props.name==="register" || this.props.name==="signin"){
                this.setState({
                    idPS: "",
                    idXBOX: "",
                    idNINTENDO: "",
                    idPC: ""
                });
            }
        },500);
    }
    render(){
        return(
            <div class="choice-bar">
                <div class="platforms">
                    <h1 id={this.state.idPS} onClick={()=>this.changeClass("PS")}>PLAYSTATION</h1>
                    <h1 id={this.state.idXBOX} onClick={()=>this.changeClass("XBOX")} >XBOX</h1>
                    <h1 id={this.state.idNINTENDO} onClick={()=>this.changeClass("NINTENDO")} >NINTENDO</h1>
                    <h1 id={this.state.idPC} onClick={()=>this.changeClass("PC")} >PC</h1>
                </div>
            </div>
        );
    }
    
}

export default ChoiceBar;