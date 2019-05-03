import React from 'react';


class Api extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      title:{},
      recipe:{},
      img:{},
      rId:35382
    }
    this.handleClick = this.handleClick.bind(this)
 
}



handleClick(){
 this.setState((prevState) =>{
    return{
      rId: prevState.rId + 1
    }
    console.log(this.state.rId)
 })
    }


componentDidMount(){
  this.setState({loading:true})
var key = 'd8ce2d218bfad54c15cefadb00637d1b';

var api = `https://www.food2fork.com/api/get?key=${key}&rId=${this.state.rId}`;
fetch(api)
  .then(response => response.json())
  .then(data =>{
    this.setState({
      title: data.recipe.title,
      loading: false,
      img: data.recipe.image_url,
      recipe: data.recipe.ingredients
    })
  } )}
  


  render(){
    const text = this.state.loading ? "Loading...": JSON.stringify(this.state.title).split('"').join('')
   const img = this.state.loading ? "Loading...": JSON.stringify(this.state.img).split('"').join('')
   const recipe = this.state.loading ? "Loading...": JSON.stringify(this.state.recipe)
   
    return(
       <div className="box">
    <div className="row"> 
  <div className="column">
      <h1> {text} </h1>
 
      <img src={img}/>
      <p>{recipe}</p>
      <button  className="btn-red" type="button "> Love! <i class="fas fa-heart"></i></button>
      <button  onClick={this.handleClick} className="btn-blue" type="button"> Likes<i class="far fa-thumbs-up"></i></button>
      <button  className="btn-purple" type="button"> Share!<i class="far fa-star"></i> </button>
      <button  className="btn-orn" type="button"> Cowabunga! <i class="fas fa-pizza-slice"></i></button>
 
      </div>
      </div>
      </div>

)}}






export default Api;
