import React from 'react';
import './App.css';
import Head from './comps/Head.js';
import Main from './comps/Main.js';
import Input from './comps/Input.js';
import Photo from './comps/Photo.js';
import Footer from './comps/Footer.js';
import BtnRed from './comps/BtnRed.js';
import Data from './data/data.js';
import Api from './comps/Api.js';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			data: Data,
			

		}
	


	}


	render(){


		return(

			<div >
				<Head />
				<Main />
			<div>
				<Photo />
			</div>
			{/*<Api /> */}
				<Footer />
			</div>
)}}




export default App;
