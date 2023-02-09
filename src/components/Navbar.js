 import React from 'react';
 import PropTypes from 'prop-types';
 import {Link} from 'react-router-dom';
 
 
 export default function Navbar(props) {
  // document.getElementById("btnfordark").style.color="white";
 
 
  let btnmode = props.mode==='light'?'blue':'white';
  console.log(btnmode);
   return (
    <>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title }</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       

      </ul>
      {/* <strong className={`form-check mx-2 form-switch text-${props.mode==='light'?'black':'white'}`}>color</strong>
      <img src="images/blue color icon.png" alt="" onClick={()=>{props.themefunc('blue')}}/>
      <img src="images/brown color icon.png" alt=""/>
      <img src="images/green color icon.png" alt=""/>
      <img src="images/black_color_icon.png" alt=""/> */}
       
      <div className={`form-check form-switch text-${props.mode==='light'?'black':'white'}`}> 
       
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.themefunc} />  
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  id="btnfordark" onClick={props.alert}>Enable Dark Mode</label>
  </div>
    </div>
  </div>
</nav>
    </>
   );
 }
 
 Navbar.propTypes={
    title:PropTypes.string.isRequired//(title should be mandotary for calling components)
 }

 Navbar.defaultProps={
    title:'ab yahi chaelga'// it will set the default value if value is not given 
 }