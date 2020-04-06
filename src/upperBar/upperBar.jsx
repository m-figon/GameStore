import React, { Component } from 'react';
import './upperBar.css';
import logo from '../logo.svg';
import search from './search.png';
class UpperBar extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }
    imageClick(value) {
        this.props.setStateHandler("platform", value);
    }
    imageClickSign(value) {
        if (this.props.operation === "sign in") {
            this.props.setStateHandler("platform", value);
        } else {
            this.props.setStateHandler("loginOperation", "sign in", "logedAc", "");
        }

    }
    inputChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <div class="upper-bar">
                <div class="bar">
                    <div id="img-search">
                        <div class="logo">
                            <img src={logo} onClick={() => this.imageClick("")} className="App-logo" alt="logo" />
                        </div>
                        <div class="margin">
                            <form class="form">
                                <input type='text' onChange={(e) => this.inputChange(e)} value={this.state.value} />
                                <button type="button"><img src={search} alt=""/></button>
                            </form>
                        </div>
                    </div>
                    <div id="login-cart">
                        <div id="registration" class="margin">
                            <h1 onClick={() => this.imageClickSign("signin")}>{this.props.logedName} {this.props.operation}</h1>
                            <h2>|</h2>
                            <h1 onClick={() => this.imageClick("register")}>register</h1>
                        </div>
                        <div class="margin-right">
                            <h1 id='products-counter'>{this.props.number}</h1>
                            <img onClick={() => this.imageClick("cart")} src="https://img.icons8.com/color/48/000000/shopping-cart.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpperBar;