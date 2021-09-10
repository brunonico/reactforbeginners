// import { useRef } from 'react';
// import './App.css';

// function App() {
//   const inputRef =useRef(null);
//   const resultRef = useRef(null);
//   const makeThings = () => {    
//     resultRef.current.innerHTML= inputRef.current.value;
//   }

//   return (
//     <div>
//       <input type="text" ref={inputRef}/>
//       <button onClick={makeThings}>Hacer cosas</button>
//       <div ref={resultRef}></div>
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react"; 

// export default() =>{

//   const [a, setA] = useState(8)
//   const [txt, setTxt]=useState('');

//   useEffect(() => {
//     alert ('hola')
//   }, [a])

//   const doThings=()=>{
//     setA (4);
//   }
//   const textChange = (e) =>{
//     setTxt(e.target.value); 

//   }

//   return (
//     <div>
//       Hello {a}
//       {txt}
//       <button onClick={()=>doThings()}>Pulse me</button>
//       <input type="text" onChange = {e => textChange(e)}/>

//     </div>
//   );
// };
// <div>
//   <p>cositas</p>
//   <MyComponent param=" Amor" param2=" odio"> tu eliges con cual te quedas </MyComponent>
//   <MyComponent2/>
//   <ElPorDefault/>
// </div>
// import ElPorDefault, { MyComponent, MyComponent2 } from "./components/MyComponent";
// const App = _ => {

// import React from "react";
// import imagenes from './assets/imagenes'

// const App = _ => {

//   return (
//     <div>
//       <h2>{imagenes[0].title}</h2>
//    <img src={imagenes[0].img1} alt="foto" /> 
//     </div>
//   )
// };

// export default App;
// import {GlobalStyle} from './styled'
// import React from "react";
// import {Cuadrado, Rectangulo,Component, Input,RedText,BlueText} from './styled'
// const App = _ => {
//   return(
//     <div>
//           <GlobalStyle />
//       <div>
//         <Cuadrado className="cuadrado"/>
//         <Rectangulo/>
//         <Component isRight>Tu naherma</Component>
//        <Input myMaxLength={10}/> 
//        <RedText>Buenas</RedText>
//        <BlueText>Noches</BlueText>
//       </div>

//     </div>
//   )

// }

// export default App;

// import React, {useEffect, useState} from "react";
// import axios from 'axios';


// const App = _ => {
//   const [name, setName] = useState(null);

//   useEffect(() => {
//     axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(response => {
//         console.log(response.data)
//         setName(response.data.name);
//       })
//   }, []);
//   return <p>{name}</p>;
// }

// export default App;

import React from 'react';
import MyProvider from './components/application/provider';
import LogIn from './components/login';
import ShowState from './components/showState'

const App = _ => <MyProvider>
  <LogIn/>
  <ShowState/>
</MyProvider>;

export default App;