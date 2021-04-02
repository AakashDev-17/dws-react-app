import React from 'react';

const Card = ({ content }) => {
   return (
      <>
         <div className="col-lg-4 col-md-6 col-10 mx-auto">
            <div className="card">
               <img src={content.imgsrc} className="card-img-top" alt="webimg" />
               <div className="card-body">
                  <h5 className="card-title">{content.title}</h5>
                  <p className="card-text">{content.content}</p>
                  <a href={content.link} className="btn btn-primary" rel="noopener noreferrer" target="_blank"> Explore </a>
               </div>
            </div>
         </div>
      </>
   )
}

export default Card;
