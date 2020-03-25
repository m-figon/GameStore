import React,{Component} from 'react';

function Select(props){
        return(
            <select id={props.id}>
            <option value="none">{props.value}</option>
            {props.array.map((value) => {
                return <option value={value}>{value}</option>
            })}
            </select>
        );
    }
export default Select;