import React from 'react';


class Api extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      title:{},
      recipe:{},
      img:{},
      rId:35383
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
 
}



handleChange(event){
 this.setState({rId:event.target.value})
 this.setState({loading:false})
    }
 
 handleSubmit(event){
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
     
     <div>
     <form onSubmit={this.handleSubmit}>
     <label>
     Recipe Id: 
     <input type="text" value={this.state.value} onChange={this.handleChange} />
     </label>
      <button  onClick={this.handleSubmit} className="btn-blue" type="button"> Recipe</button>
      </form>
      </div>
     
      </div>
      </div>
      </div>

)}}






export default Api;
