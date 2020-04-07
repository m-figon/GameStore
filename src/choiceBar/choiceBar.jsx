import React, { Component } from 'react';
import './choiceBar.css';
import { Link } from 'react-router-dom';
class ChoiceBar extends Component {
    constructor() {
        super();
        this.state = {
            idPS: "",
            idXBOX: "",
            idNINTENDO: "",
            idPC: ""
        };
    }
    changeClass(variable) {
        if (variable === "PS") {
            this.setState({
                idPS: "selected",
                idXBOX: "",
                idNINTENDO: "",
                idPC: ""
            });
        } else if (variable === "XBOX") {
            this.setState({
                idPS: "",
                idXBOX: "selected",
                idNINTENDO: "",
                idPC: ""
            });
        } else if (variable === "NINTENDO") {
            this.setState({
                idPS: "",
                idXBOX: "",
                idNINTENDO: "selected",
                idPC: ""
            });
        } else if (variable === "PC") {
            this.setState({
                idPS: "",
                idXBOX: "",
                idNINTENDO: "",
                idPC: "selected"
            });
        }
    }
    componentDidMount() {
        setInterval(() => {
            if (this.props.name === "" || this.props.name === "register" || this.props.name === "signin") {
                this.setState({
                    idPS: "",
                    idXBOX: "",
                    idNINTENDO: "",
                    idPC: ""
                });
            }
        }, 500);
    }
    render() {
        return (
            <div class="choice-bar">
                <div class="platforms">
                    <Link to='/PS'><h1 id={this.state.idPS} onClick={() => this.changeClass("PS")}>PLAYSTATION</h1></Link>
                    <Link to='/XBOX'><h1 id={this.state.idXBOX} onClick={() => this.changeClass("XBOX")} >XBOX</h1></Link>
                    <Link to='/NINTENDO'><h1 id={this.state.idNINTENDO} onClick={() => this.changeClass("NINTENDO")} >NINTENDO</h1></Link>
                    <Link to='/PC'><h1 id={this.state.idPC} onClick={() => this.changeClass("PC")} >PC</h1></Link>
                </div>
            </div>
        );
    }

}

export default ChoiceBar;