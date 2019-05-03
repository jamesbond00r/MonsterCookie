import React from 'react';


class Api extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      title:{}
    }
    }


componentDidMount(){
  this.setState({loading:true})
var key = 'd8ce2d218bfad54c15cefadb00637d1b';
var rId =  35382;
var api = `https://www.food2fork.com/api/get?key=${key}&rId=${rId}`;
fetch(api)
  .then(response => response.json())
  .then(data =>{
    this.setState({
      title: data.recipe.title,
      loading: false
    })
  } )}
  


  render(){
    const text = this.state.loading ? "Loading...": JSON.stringify(this.state.title)
    console.log(this.state.title)
    return(
      <div>
       <h1> {text} </h1>
      </div>

)}}






export default Api;
