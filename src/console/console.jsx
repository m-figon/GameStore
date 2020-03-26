import React,{Component} from 'react';
import './console.css';
class Console extends Component{
    render(){
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
                    <h1>Product 1</h1>
                    <h1>Product 2</h1>
                    <h1>Product 3</h1>
                    <h1>Product 4</h1>
                    <h1>Product 5</h1>
                    <h1>Product 6</h1>
                    <h1>Product 7</h1>
                    <h1>Product 8</h1>
                    <h1>Product 9</h1>
                </div>
            </div>
        </div>
        );
        
    }

}
export default Console;
//dodaj grid layout do tego jakis