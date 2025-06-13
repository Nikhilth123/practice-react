import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  const addcolor = (e) => {
   let colorname=e.target.innerText;
   if(colorname==="white"){
    document.body.querySelector("h1").style.color="black";
   }
   else {
    document.body.querySelector("h1").style.color="white";
   }
   console.log(colorname);
    if (colorname === "reset") {
      setColor("black");
      document.body.style.backgroundColor = "black";
      return;
    }
    else if(colorname==="random") {
      const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
       if(randomColor==="white"){
    document.body.querySelector("h1").style.color="black";
   }
   else {
    document.body.querySelector("h1").style.color="white";
   }
      document.body.style.backgroundColor = randomColor;
      return;
    }
    else {
      setColor(colorname);
    }
    console.log(color);
    document.body.style.backgroundColor = colorname;
  }

  return (
    <>
    <h1>Background Color Changer</h1>
    <div className='flex'>
      <button onClick={addcolor}>red</button>
      <button onClick={addcolor}>blue</button>
      <button onClick={addcolor}>green</button>
      <button  onClick={addcolor}>yellow</button>
      <button onClick={addcolor}>purple</button>
      <button onClick={addcolor}>orange</button>
      <button onClick={addcolor}>pink</button>
      <button onClick={addcolor}>black</button>
      <button onClick={addcolor}>white</button>
      <button onClick={addcolor}>reset</button>
      <button onClick={addcolor}>random</button>
      </div>
    </>
  )
}

export default App
