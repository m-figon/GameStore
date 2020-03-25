import React,{Component} from 'react';
import './ad.css'
class Ad extends Component{
    constructor(){
        super();
        this.state={
            adArray: ["https://images.hdqwalls.com/download/rayman-legends-4k-do-1336x768.jpg",
            "https://i.ytimg.com/vi/LTqczRnNqDc/maxresdefault.jpg",
            "https://images.ladbible.com/thumbnail?type=jpeg&url=https://www.unilad.co.uk/wp-content/uploads/2017/05/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_1920x1080_1449484678.jpg&quality=70&height=700",
            "https://ithardware.pl/artykuly/max/7651_1.jpg"],
            adPrice: ["-10%","-20%","-30%","-40%"],
            adNumber: 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
          this.setState({
              adNumber: this.state.adNumber+1
          });
        },5000);
    }
    render(){
        return(
            <div class="big-ad">
                <div class="ad">
                    <img src={this.state.adArray[0]} alt="" />
                    <img src={this.state.adArray[1]} alt="" />
                    <img src={this.state.adArray[2]} alt="" />
                    <img src={this.state.adArray[3]} alt="" />
                </div>
                <div class="discount">
                    <h1>{this.state.adPrice[this.state.adNumber%4]}</h1>
                </div>
            </div>
        );
    }
}
export default Ad;