import React from 'react';

class Form extends React.Component{
	constructor(){
		super()
		this.state ={
			firstName:""
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	render(){
		return(
			<div>
			<form>
			<h1>{this.state.firstName}</h1>
			<input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
			<button  className="btn-orn" type="button"> Cowabunga! <i class="fas fa-pizza-slice"></i></button>
			</form>
			</div>


		)
	}
}




export default Form;
