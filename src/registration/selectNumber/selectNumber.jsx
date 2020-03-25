import React,{Component} from 'react';

class SelectNumber extends Component{
    constructor(){
        super();
        this.state={
            selectValue: ""
        };
        this.afterOnChange=this.afterOnChange.bind(this);
    }
    afterOnChange(event){
        this.setState({
            selectValue: event.target.value
        })
        this.props.selectHandler(event.target.value);
    }
    render(){
        const array=[];
        if(this.props.increment==1){
            for(var i=this.props.start; i<=this.props.end; i=i+this.props.increment){
                array.push(<option value={i}>{i}</option>)
            } 
        }else if(this.props.increment==-1){
            for(var i=this.props.start; i>=this.props.end; i=i+this.props.increment){
                array.push(<option value={i}>{i}</option>)
            }
        }
        return(
        <select id={this.props.id} value={this.state.selectValue} onChange={(e)=>this.afterOnChange(e)}><option value="none">{this.props.value}</option>{array}</select>
        );
    }
        
}
export default SelectNumber;