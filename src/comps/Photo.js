import React from 'react';
import Input from './Input.js';


function Photo(props) {
  return (
    <div className="box">
    <div className="row"> 
  <div className="column">

    <img src={ props.imgUrl}/>
    <h1>{props.name}</h1>
    <p>{props.recipes}</p>
    
    <Input />
    
    
  </div>
  
</div>
</div>
  );
}

export default Photo;
