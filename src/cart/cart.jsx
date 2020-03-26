import React from 'react';
import './cart.css';
function Cart(props){
    return(
        <div class="cart">
            <div class="section-cart">
            <h1 id="inside-cart">INSIDE CART</h1>
            {props.array.map((name) => (
            <div class="product">
            <div class="product-sign">
                <h1 key={name.id}>{name.name}</h1>            
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
    );
}
export default Cart;