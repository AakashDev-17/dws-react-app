import React from 'react';
import {NavLink} from "react-router-dom";

const Card = ({ content }) => {
   return (
      <>
         <div className="col-lg-4 col-md-6 col-10 mx-auto">
            <div className="card">
               <img src={content.imgsrc} className="card-img-top" alt="webimg" />
               <div className="card-body">
                  <h5 className="card-title">{content.title}</h5>
                  <p className="card-text">{content.content}</p>
                  <NavLink to={content.link} className="btn btn-primary" target="_blank"> Explore </NavLink>
               </div>
            </div>
         </div>
      </>
   )
}

export default Card;
