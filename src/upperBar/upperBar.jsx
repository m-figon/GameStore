import React, { Component } from 'react';
import './upperBar.css';
import logo from './logo.png';
import search from './search.png';
import { Link } from 'react-router-dom';
class UpperBar extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
        }
    }
    imageClickSign(value) {
        if (this.props.operation === "sign in") {

        } else {
            
        }

    }
    inputChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        const SigningComponent = () => {
            if(this.props.operation==="sign in"){
                return (
                    <Link to={this.props.direction}><h1>{this.props.logedName} {this.props.operation}</h1></Link>
                  );
            }else{
                return(
                <h1 onClick={()=>this.props.setStateHandler("loginOperation", "sign in", "logedAc", "")}>{this.props.logedName} {this.props.operation}</h1>
                );
            }
            
          }
        return (
            <div class="upper-bar">
                <div class="bar">
                    <div id="img-search">
                        <div class="logo">
                            <Link to=''><img src={logo} className="App-logo" alt="logo" /></Link>
                            <Link to=''><h2>GameStore</h2></Link>
                        </div>
                    </div>
                    <div id="login-cart">
                        <div id="registration" class="margin">
                                <SigningComponent/>
                            <h2>|</h2>
                            <Link to='/Register'><h1>register</h1></Link>
                        </div>
                        <div class="margin-right">
                            <h1 id='products-counter'>{this.props.number}</h1>
                            <Link to="/Cart"><img src="https://img.icons8.com/color/48/000000/shopping-cart.png" alt=""/></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpperBar;