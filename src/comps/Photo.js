import React from 'react';
import Input from './Input.js';


function Photo(props) {
  return (
    <div className="box">
    <div className="row"> 
  <div className="column">

    <img style={{display: props.imgUrl ? "block" : "none"}} src={ props.imgUrl}/>
    <h1 style={{display: props.name ? "block" : "none"}}>{props.name}</h1>
    <p style={{display: props.imgUrl ? "block" : "none"}}>{props.recipes}</p>
    
    <Input />
    
    
  </div>
  
</div>
</div>
  );
}

export default Photo;
