import React,{Component} from 'react';
import './console.css';
class Console extends Component{
    constructor(){
        super();
        this.state={
            type: "all"
        };
        this.changeType = this.changeType.bind(this);
    }
    
    changeType(newType){
        this.setState({
            type: newType
        });
    }
    render(){
        const display=this.props.file.map((game) =>{
            if(this.state.type=='games' && game.type=="game"){
                return(
                    <div class="product">
                    <div class="product-sign">
                        <h1 key={game.id}>{game.name}</h1>
                        <img id='cart' onClick={()=>this.props.changeCartNumber(game.console,game.id)} src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>             
                    </div>
                    <div class="image">
                        <img key={game.id} src={game.src} alt=""/>
                    </div>
                    <div class="price">
                    <h1 key={game.id}>{game.price}</h1>
                    </div>
                    </div>);
            }else if(this.state.type=='all'){
                return(
                    <div class="product">
                    <div class="product-sign">
                        <h1 key={game.id}>{game.name}</h1>
                        <img id='cart' onClick={()=>this.props.changeCartNumber(game.console,game.id)} src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>             
                    </div>
                    <div class="image">
                        <img key={game.id} src={game.src} alt=""/>
                    </div>
                    <div class="price">
                    <h1 key={game.id}>{game.price}</h1>
                    </div>
                    </div>);
            }
            else if(this.state.type=='consoles' && game.type=="console"){
                return(
                    <div class="product">
                    <div class="product-sign">
                        <h1 key={game.id}>{game.name}</h1>
                        <img id='cart' onClick={()=>this.props.changeCartNumber(game.console,game.id)} src="https://img.icons8.com/color/48/000000/shopping-cart.png"/>             
                    </div>
                    <div class="image">
                        <img key={game.id} src={game.src} alt=""/>
                    </div>
                    <div class="price">
                    <h1 key={game.id}>{game.price}</h1>
                    </div>
                    </div>);
            }

        });
        return(
            <div class="console">
            <div class="section-console">
                <div class="select-section">
                    <div class="sign" onClick={()=>this.changeType("all")}>
                    <h1 >ALL</h1>
                    </div>
                    <div class="sign" onClick={()=>this.changeType("consoles")}>
                    <h1 >CONSOLES</h1>
                    </div>
                    <div class="sign" onClick={()=>this.changeType("games")}>
                    <h1 >GAMES</h1>
                    </div>
                </div>
                <div class="products">
                    {display}
                </div>
            </div>
        </div>
        );  
    }
        
}
export default Console;