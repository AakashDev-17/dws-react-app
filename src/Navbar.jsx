import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

   const [collapsed, setCollapsed] = useState('collapsed');
   const [expanded, setExpanded] = useState(false);
   const [show, setShow] = useState('');

   const navToggle = () => {
      setCollapsed(collapsed===''?'collapsed':'');
      setExpanded(expanded===true?false:true);
      setShow(show==='show'?'':'show');
   };

   return (
      <>
         <div className="row navrow">
            <div className="col-10 mx-auto">


               <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                  <div className="container-fluid">
                     <NavLink className="navbar-brand" to="/">DWS</NavLink>
                     <button className={`navbar-toggler ${collapsed}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={expanded} aria-label="Toggle navigation" onClick={navToggle}>
                        <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className={`collapse navbar-collapse ${show}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                              <NavLink exact activeClassName="menu_active" className="nav-link" to="/" onClick={navToggle}>Home</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink exact activeClassName="menu_active" className="nav-link" to="/service" onClick={navToggle}>Services</NavLink>
                           </li>

                           <li className="nav-item">
                              <NavLink exact activeClassName="menu_active" className="nav-link" to="/about" onClick={navToggle}>About</NavLink>
                           </li>

                           <li className="nav-item">
                              <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact" onClick={navToggle}>Contact</NavLink>
                           </li>

                        </ul>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      </>
   )
}

export default Navbar;
