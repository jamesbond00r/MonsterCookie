import React from 'react';
import './App.css';
import Head from './comps/Head.js';
import Main from './comps/Main.js';
import Input from './comps/Input.js';
import Photo from './comps/Photo.js';
import Footer from './comps/Footer.js';

function App() {
  return (
    <div >
    <Head />
    <Main />
    <Photo />
    <Input />
    <Footer />
    </div>
  );
}

export default App;
