import ItemList from "./ItemList";
import Navbar from "./Navbar";
import React, { useState } from "react";
import AdddedtoCart from "./AddedtoCart";

const App = () => {
  const[carts, setCarts] = useState([])
  const[display, setDisplay] = useState(true)
  const handleClick = (id) => {
    if (carts.indexOf(id) !== -1) return;
      setCarts([...carts, id])
  }
  return ( 
    <>
      <Navbar setDisplay={setDisplay} numberofitem={carts.length}/>
      {display ? (<ItemList handleClick={handleClick}/>): (<AdddedtoCart setDisplay={setDisplay} carts={carts} setCarts={setCarts}/>)}
    </>
   );
}
 
export default App;
