import React from 'react';
import Input from './Input.js';
import Data from '../data/data.js';

class Photo extends React.Component {
  constructor(){
    super()
    this.state = {
      data: Data,
      like: 0,
      isLoading: true

    }
  this.handleClick = this.handleClick.bind(this)
 
}



handleClick(){
 this.setState((prevState) =>{
    return{
      like: prevState.like + 2
    }

 })
 

  }


  render(){


    const photoComponents = this.state.data.map(data => {
    return (
        <div className="box">
    <div className="row"> 
  <div className="column">
      <img className="img"
       key={data.id} 
       style={{display: data.imgUrl ? "block" : "none"}}
       src={ data.imgUrl}/>

      <h1 style={{display: data.name ? "block" : "none"}}>{data.name}</h1>
       
      <p style={{display: data.imgUrl ? "block" : "none"}}>{data.recipes}</p>

      <button  className="btn-red" type="button"> Love! </button>
      <button  onClick={this.handleClick} className="btn-blue" type="button"> Likes! {this.state.like}</button>
      <button  className="btn-purple" type="button"> Share! </button>
      <button  className="btn-orn" type="button"> Cowabunga! </button>
      </div>
    
    
  </div>
  
</div>

       
   
      )
  })

    
    return(
      <div>
        {photoComponents}
      </div>

)}}






export default Photo;
