import React from "react";
import "./Header.css";
import img from "../cc-removebg-preview.png"
import { Link,NavLink } from "react-router-dom";

const Header =()=>{
    return <div className="header">
           <div className="logo">
            
            <Link to="/">
            <img src={img} alt="img"/>
                <h1>Girls cinema</h1></Link>
            
        </div>
        <div className="ll">
         
            <ul className="nav-links">
                <li>
                    <NavLink to="/">Watch List</NavLink>
                    </li>
                <li>
                <NavLink to="/Watched">Watched</NavLink>
                    </li>
                <li>
                    <NavLink to="/Add" className="btn">Add</NavLink>
                    </li>

            </ul>
        </div>
    </div>
};
export default Header;