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
                        <div class="mb-3">
                              <label for="Name" class="form-label">Name</label>
                              <input type="text" class="form-control" id="Name" />
                           </div>
                           <div class="mb-3">
                              <label for="PhoneNo" class="form-label">Phone No.</label>
                              <input type="number" class="form-control" id="PhoneNo" />
                           </div>
                           <div class="mb-3">
                              <label for="Email" class="form-label">Email address</label>
                              <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" />
                              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                           </div>
                           <div class="mb-3">
                              <textarea rows="4" className="form-control" placeholder="Type your message...."></textarea>
                           </div>
                           <div class="mb-3 form-check">
                              <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={()=>setChecked(!checked)} checked={checked} />
                              <label class="form-check-label" for="exampleCheck1">Confirm your details!</label>
                           </div>
                           <button type="submit" class="btn btn-primary" disabled={!checked}>Submit</button>
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
