import { useState } from "react";

const Header =() =>{

   const[loginbtn,setlogin]= useState("login");

    return (
       <div className="header">
        < div className="img-logo">
         <img src="https://png.pngtree.com/png-clipart/20230512/original/pngtree-fast-food-burger-icon-vector-illustration-logo-template-png-image_9158878.png" className="logo"></img>
        </div> 

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Card</li>
                <li><button className="login" onClick={()=>{
                    setlogin("logout")
                }}>{loginbtn}</button> </li>
            </ul>
        </div>
       
       

       </div>
    )
}


export default Header;