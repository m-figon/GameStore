import React,{Component} from 'react';

class Select extends Component{
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
        return(
            <>
            <select onFocus={this.props.tooltipShowHandler} onBlur={this.props.tooltipHideHandler} id={this.props.id} value={this.state.selectValue} onChange={(e)=>this.afterOnChange(e)}>
            <option value="none">{this.props.value}</option>
            {this.props.array.map((value) => {
                return <option value={value}>{value}</option>
            })}
            </select>
            </>
        );
    }
        
}
export default Select;