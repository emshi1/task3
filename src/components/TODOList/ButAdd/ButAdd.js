import React from 'react';


function ButAdd (props){
    console.log(props);
    return (
        <button onClick = {props.onClick} type = "button" value="" className = "btn btn-success">ButAdd</button>
    );
}

export default ButAdd;