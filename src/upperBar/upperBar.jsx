import React,{Component} from 'react';
import './upperBar.css';
import logo from '../logo.svg';
import search from './search.png';
class UpperBar extends Component{
    constructor(){
        super();
        this.imageClick = this.imageClick.bind(this);
    }
    imageClick(){
        this.props.platformHandler("");
    }
    render(){
        return(
            <div class="upper-bar">
                <div class="bar">
                    <div id="img-search">
                        <div class="logo">
                            <img src={logo} onClick={this.imageClick}className="App-logo" alt="logo" />
                        </div>
                        <div class="margin">
                            <form class="form">
                            <input type='text' value=''/>
                            <button><img src={search}></img></button>
                            </form>
                            
                        </div>
                    </div>
                    <div id="login-cart">
                        <div class="margin">
                            <h1>login</h1>
                        </div>
                        <div class="margin">
                            <img src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>             
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default UpperBar;