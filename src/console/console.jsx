import React,{Component} from 'react';
import './console.css';
function Console(props){
        const display=props.file.map((game) =>
                    <div class="product">
                        <div class="product-sign">
                            <h1 key={game.id}>{game.name}</h1>
                            <img id='cart' onClick={()=>props.changeCartNumber(game.console,game.id)} src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>             
                        </div>
                        <div class="image">
                            <img key={game.id} src={game.src} alt=""/>
                        </div>
                        <div class="price">
                        <h1 key={game.id}>{game.price}</h1>
                        </div>
                    
                    </div>
                    );
        return(
            <div class="console">
            <div class="section-console">
                <div class="select-section">
                    <div class="sign">
                    <h1>ALL</h1>
                    </div>
                    <div class="sign">
                    <h1>CONSOLES</h1>
                    </div>
                    <div class="sign">
                    <h1>GAMES</h1>
                    </div>
                </div>
                <div class="products">
                    {display}
                </div>
            </div>
        </div>
        );  
}
export default Console;