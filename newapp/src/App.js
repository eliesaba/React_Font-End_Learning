import logo from './logo.svg';
import React, { useState, useRef } from 'react';
//import {FaStar} from "react-icons/fa";
import './App.css';
//import { Component } from 'react';
//import ColorData from './color-data.json'
//import {ColorList} from './ColorList.js'


// export const data = [
//   { 
//    name: "Baked Salmon",
//    ingredients : ["Salmon", "Pine Nuts", "Butter Lettuce"],
//    steps: ["Preheat the oven to 350 degrees", "Spread the olive oil", "Add the yellow squash"]
//   },
//   { 
//     name: "Fish Tacos",
//     ingredients : ["Whitefish", "Cheese", "Iceberg Letttuce"],
//     steps: ["Cook the fish on grill", "place the fish", "Top them with lettuce"]
//    }
// ];

// export function Menu ({title, array}) {
//   return(
//     <section>
//       <h1>{title}</h1>
//       {array.map((item, i)=> (
//         <React.Fragment>
//           <Ingredients key={i} {...item} />
//           <Steps key={i} {...item} />
//         </React.Fragment>
//       ))}
//      </section> 
//   );
// }

// export function Ingredients ({ingredients, name}) {
//   return(
//   <section>  
//     <h3>{name}</h3>
//     <ul>
//       {ingredients.map((item, i)=> (
//         <li>{item}</li>
//       ))}
//      </ul>
//    </section>   
//   );
// }

// export function Steps ({steps}) {
//   return(
//   <section>  
//       {steps.map((item, i)=> (
//         <p>{item}</p>
//       ))}
     
//    </section>   
//   );
// }

// export function StarRating() {
//   return[
//   <React.Fragment>
//     <FaStar color="red" />
//     <FaStar color="red" />
//     <FaStar color="red" />
//     <FaStar color="grey" />
//     <FaStar color="grey" />
//   </React.Fragment>  
//   ];
// }

// const Star = ({selected = false, onSelect = f => f})=> (
//   <FaStar color={selected? "red" : "grey"} onClick={onSelect}/>
// );

// export const createArray = length => [...Array(length)];

// export function CreateStar ({numberOfStars = 5, ClickStar = 0,  onClickStar = f => f }) {
  
//      return (
//      <div>  
//      {createArray(numberOfStars).map((item,i) => <Star key= {i}  selected={ClickStar > i}
//                                                                  onSelect={()=>{onClickStar(i+1)}}/>)}
//      <p>{ClickStar} of {numberOfStars}</p>
//      </div>
//      );
//     }

// export function App() {
//   const [Colors, setColors] = useState(ColorData);
//   return <ColorList colors= {Colors} onRemoveColor={id => {
//                                 const newColors = Colors.filter(color => color.id !== id);
//                                 setColors(newColors);}}
//                               onClickStarColor = {(id,rating) => {
//                                 const newColors = Colors.map(color => color.id === id ? {...color,rating} : color);
//                                 setColors(newColors);
//                                       } }/>
// }

export function App() {
     const [txtTitle, settxtTile] = useState("");
     const  [hexColor, sethexColor] = useState("");

    const submit = e => {
        e.preventDefault();
        console.log({txtTitle});
    }

    return(
        <section>
            <form onSubmit = {submit}>
                <input value = {txtTitle} type = "text" onChange={e=>settxtTile(e.target.value)} required/>
                <input type = "color" required/>
                <button type = "submit"/>
            </form>
        </section>
    );
    
}





