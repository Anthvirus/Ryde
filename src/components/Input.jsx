import React from "react";

function Input(props){
    return <input type={props.type}  className={props.className} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.onChange}/>
}

export default Input;