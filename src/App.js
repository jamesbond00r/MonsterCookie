import React from 'react';
import './App.css';
import Head from './comps/Head.js';
import Main from './comps/Main.js';
import Input from './comps/Input.js';
import Photo from './comps/Photo.js';
import Footer from './comps/Footer.js';
import BtnRed from './comps/BtnRed.js';

function App() {
  return (
    <div >
    <Head />
    <Main />

    <Photo 
     name="Pizza"
     imgUrl="https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
     recipes="In a small bowl, dissolve yeast in warm water. Let stand until creamy, about 10 minutes.
In a large bowl, combine flour, salt and shortening. Stir in the yeast mixture. When the dough has pulled together, turn it out onto a lightly floured surface, and knead until smooth and elastic, about 8 minutes. Lightly oil a large bowl, place the dough in the bowl, and turn to coat with oil. Cover with a damp cloth, and let rise in a warm place until doubled in volume, about 45 minutes.
Heat oil in a small saucepan over medium heat. Saute onion until tender. Stir in tomato paste and water. Season with sugar, salt, black pepper, garlic powder, basil, oregano, marjoram, cumin, chili powder and red pepper flakes. Simmer 15 to 20 minutes.
Recipe makes 2 (12 inch) pizzas. Divide dough in half, and spread onto pizza pans. Cover with sauce, and desired toppings. Bake at 400 degrees for 20 minutes, or until crust is golden brown."
     
     />
   <Photo 
   name="Also Pizza"
   imgUrl="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
   recipes="Call up the pizza place, Order the pizza, Get the pizza!"
   />

   <Photo
   name="More Pizza!!!!!!"
   imgUrl="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
   recipes="In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. Stir in flour, a cup at a time, until a soft dough forms.
Turn onto floured surface; knead until smooth and elastic, about 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until no longer pink; drain.
Punch down dough; divide in half. Press each into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil; spread over each crust. Top with beef mixture, green pepper and cheese.
Bake at 400° for 25-30 minutes or until crust is lightly browned."
/>

    <Footer />
    </div>
  );
}

export default App;
