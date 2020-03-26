import React,{Component} from 'react';
import './upperBar.css';
import logo from '../logo.svg';
import search from './search.png';
class UpperBar extends Component{
    constructor(){
        super();
        this.state={
            value: ""
        }
        this.imageClick = this.imageClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.searchByValue = this.searchByValue.bind(this);
    }
    imageClick(value){
        this.props.platformHandler(value);
    }
    inputChange(event){
        this.setState({
            value: event.target.value
        })
    }
    searchByValue(){
        console.log(this.state.value);
    }
    render(){
        return(
            <div class="upper-bar">
                <div class="bar">
                    <div id="img-search">
                        <div class="logo">
                            <img src={logo} onClick={()=>this.imageClick("")} className="App-logo" alt="logo" />
                        </div>
                        <div class="margin">
                            <form class="form">
                            <input type='text' onChange={this.inputChange} value={this.state.value}/>
                            <button type="button"><img src={search} onClick={this.searchByValue}></img></button>
                            </form>
                        </div>
                    </div>
                    <div id="login-cart">
                        <div id="registration" class="margin">
                            <h1 onClick={()=>this.imageClick("signin")}>sign in </h1>
                            <h2>|</h2>
                            <h1 onClick={()=>this.imageClick("register")}>register</h1>
                        </div>
                        <div class="margin-right">
                            <h1 id='products-counter'>{this.props.number}</h1>
                            <img onClick={()=>this.imageClick("cart")} src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>             
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default UpperBar;