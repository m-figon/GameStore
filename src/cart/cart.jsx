import React from 'react';
import './cart.css';
import stop from './stop-sign.png';
function Cart(props) {
    return (
        <div class="cart">
            <div class="section-cart">
                <h1 id="inside-cart-sign">INSIDE CART</h1>
                <div class="inside-cart">
                    {props.array.map((name) => (
                        <div class="product-inside">
                            <div class="product-sign">
                                <h1 key={name.id}>{name.name}</h1>
                                <img alt="" id='cancel' onClick={() => props.deleteHandler(name)} src={stop} />
                            </div>
                            <div class="image">
                                <img key={name.id} src={name.src} alt="" />
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
export default Cart;