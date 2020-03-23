import React,{Component} from 'react';
import './ad.css'
class Ad extends Component{
    constructor(){
        super();
        this.state={
            adArray: ["https://i.ytimg.com/vi/-EuD9QLlnvQ/maxresdefault.jpg",
            "https://i.ytimg.com/vi/ncu_dypn9Tc/maxresdefault.jpg",
            "https://images.ladbible.com/thumbnail?type=jpeg&url=https://www.unilad.co.uk/wp-content/uploads/2017/05/witcher3_en_wallpaper_the_witcher_3_wild_hunt_geralt_with_trophies_1920x1080_1449484678.jpg&quality=70&height=700",
            "https://ithardware.pl/artykuly/max/7651_1.jpg"],
            adNumber: 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
          this.setState({
              adNumber: this.state.adNumber+1
          });
        },3000);
    }
    render(){
        return(
            <div class="big-ad">
                <img src={this.state.adArray[this.state.adNumber%4]} alt="" />
            </div>
        );
    }
}
export default Ad;