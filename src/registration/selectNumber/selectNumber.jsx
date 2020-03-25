import React,{Component} from 'react';

function SelectNumber(props){
        const array=[];
        if(props.increment==1){
            for(var i=props.start; i<=props.end; i=i+props.increment){
                array.push(<option value={i}>{i}</option>)
            } 
        }else if(props.increment==-1){
            for(var i=props.start; i>=props.end; i=i+props.increment){
                array.push(<option value={i}>{i}</option>)
            }
        }
        
    return(<select><option value="none">{props.value}</option>{array}</select>);
    }
export default SelectNumber;