import React from 'react';
import RightArea from "./RightArea/RightArea";
import LeftArea from "./LeftArea/LeftArea";
//import style from './TODOList.module.css'


const TODOList = (props) => {
  console.log(props.store.getState());
  return (
    
    <div className="row">
      <LeftArea store = {props.store}/>
      <RightArea store = {props.store}/>
    </div>
  );
}

export default TODOList;
