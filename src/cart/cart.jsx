import React, { Component } from 'react';
import './cart.css';
import stop from './stop-sign.png';
class Cart extends Component{
    constructor(){
        super();
        this.state={

        };
    }
    render(){
        return(
            <div class="cart">
                <div class="section-cart">
                <h1 id="inside-cart-sign">INSIDE CART</h1>
                <div class="inside-cart">
                {this.props.array.map((name) => (
                <div class="product-inside">
                <div class="product-sign">
                    <h1 key={name.id}>{name.name}</h1>  
                    <img id='cancel' onClick={()=>this.props.deleteHandler(name)} src={stop}/>                       
                </div>
                <div class="image">
                    <img key={name.id} src={name.src} alt=""/>
                </div>
                <div class="price">
                <h1 key={name.id}>{name.price}</h1>
                </div>
            
            </div>))}
            </div>
                </div>
            </div>
        );
    }
    
}
export default Cart;