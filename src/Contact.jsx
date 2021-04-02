import React, { useState } from 'react';
import contactImg from "../src/images/contactImg.png";

const Contact = () => {

   const [checked, setChecked] = useState(false);
   const [formData, setFormData] = useState({
      name:'', phone:'', email:'', msg:''
   });

   const onChangeInput = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]:value});
   };

   const onSubmit = (e) => {
      e.preventDefault();
      if(formData.name===''||formData.email===''||formData.phone===''||formData.msg==='') {
         window.alert("Please complete the form first !!");
      }
      else {
         window.alert(`hi ${formData.name} !! Your submitted data is: email: ${formData.email}, phone: ${formData.phone}, message: ${formData.msg}. Thank you for contacting us.`);
         setFormData({name:'', phone:'', email:'', msg:''});
         setChecked(false);
      }
   };

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
                        <form className="p-5" onSubmit={onSubmit}>
                           <div className="mb-3">
                              <label htmlFor="Name" className="form-label">Name</label>
                              <input type="text" className="form-control" id="Name" name="name" value={formData.name} onChange={onChangeInput} />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="PhoneNo" className="form-label">Phone No.</label>
                              <input type="number" className="form-control" id="PhoneNo" name="phone" value={formData.phone} onChange={onChangeInput} />
                           </div>
                           <div className="mb-3">
                              <label htmlFor="Email" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" name="email" value={formData.email} onChange={onChangeInput} />
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                           </div>
                           <div className="mb-3">
                              <textarea rows="4" className="form-control" name="msg" value={formData.msg} placeholder="Type your message...." onChange={onChangeInput} ></textarea>
                           </div>
                           <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() => setChecked(!checked)} checked={checked} />
                              <label className="form-check-label" htmlFor="exampleCheck1">Confirm your details!</label>
                           </div>
                           <button type="submit" className="btn btn-primary" disabled={!checked} >Submit</button>
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
