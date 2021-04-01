import React from 'react';
import Card from "./Card";
import serviceList from "./ServiceContent";

const Service = () => {
   return (
      <div className="serviceBox mt-5">
         <div className="my-5">
            <h1 className="text-center py-3"> Our Services </h1>
         </div>
         <div className="container-fluid mb-3 pb-5">
            <div className="row serviceRow">
               <div className="col-10 mx-auto">
                  <div className="row gy-5">
                     {serviceList.map((item, index) => (<Card key={index} content={item} />))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service;
