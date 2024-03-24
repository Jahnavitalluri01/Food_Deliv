import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function Header(){
    return(
     
        <Navbar expand="lg" className="py-3">
        <div className="container">
            <Navbar.Brand style={{color:"#7c1034",fontSize:"22px",fontWeight:"700"}}>
                Food Deliv
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navv"></Navbar.Toggle> 
            <Navbar.Collapse id="navv">
                <Nav className="ms-auto d-flex align-items-center">
                    <NavLink to='/' className="me-5 fs-5 navitem" style={{textDecoration:"None",color:"#7c1034"}}>Home</NavLink>
                    <NavLink to='/' className="me-5 fs-5 navitem" style={{textDecoration:"None",color:"#7c1034"}}>Menu</NavLink>
                    <NavLink to='/cart' className="fs-5 navcart" style={{textDecoration:"None"}}>Cart</NavLink>
                </Nav>
            </Navbar.Collapse> 
        </div>
    </Navbar>
         
    )
}
export default Header