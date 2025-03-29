import React from "react"

import ReactDOM from "react-dom/client"
import { useEffect,useState } from "react";

import Header from "./Components/Header";
import Body from "./Components/Body"



/* b
  -header 
    -logo
    -nav-items
  -Body
     -Searchbar -searchbtn 
     -returarantcontainer
        -restrocards 
   -footer


*/


// let rating="*"
const App =() =>{

   

    return (
       <div className="app">
           <Header/>
        
     <Body></Body>
       
        

       </div>
       
        
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);



