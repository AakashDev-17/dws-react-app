import React, { useState } from 'react';
import contactImg from "../src/images/contactImg.png";

const Contact = () => {

   const [checked, setChecked] = useState(false);

   return (
      <>
         <div className="contactBox">
            <div className="row">
               <div className="col-10 mx-auto">
                  <div className="row">
                     <div className="col-md-6 contactImgBox">
                        <img src={contactImg} alt="contactImg" />
                     </div>
                     <div className="col-md-6 contactFormBox">
                        <form className="p-5">
                           <div className="mb-3">
                              <label htmlFor="Name" className="form-label">Name</label>
                              <input type="text" className="form-control" id="Name" />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="PhoneNo" className="form-label">Phone No.</label>
                              <input type="number" className="form-control" id="PhoneNo" />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="Email" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                           </div>
                           <div className="mb-3">
                              <textarea rows="4" className="form-control" placeholder="Type your message...."></textarea>
                           </div>
                           <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => setChecked(!checked)} checked={checked} />
                              <label className="form-check-label" htmlFor="exampleCheck1">Confirm your details!</label>
                           </div>
                           <button type="submit" className="btn btn-primary" disabled={!checked}>Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Contact;
