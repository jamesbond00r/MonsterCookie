import React from 'react';
import './App.css';
import Head from './comps/Head.js';
import Main from './comps/Main.js';
import Input from './comps/Input.js';
import Photo from './comps/Photo.js';
import Footer from './comps/Footer.js';
import BtnRed from './comps/BtnRed.js';
import Data from './data/data.js';



function App() {

	const photoComponents = Data.map(data => {
		return (
			<Photo name={data.name} imgUrl={data.imgUrl} recipes={data.recipes} />
			)
	})

  return (
    <div >
    <Head />
    <Main />
<div>
   {photoComponents}
</div>
    <Footer />
    </div>
  );
}

export default App;
