import React, { useState } from 'react';
import  AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
//import './GifExpertApp.css';

function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory addCategory={setCategories}/>
      <hr />
      <ol>
        {categories.map((category, idx) => (
           <GifGrid key={category+idx} category={category}/>
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp;
