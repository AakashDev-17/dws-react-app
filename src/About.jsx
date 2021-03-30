import React from 'react';
import aboutimg from "../src/images/aboutImg.png";
import Common from "./Common";

const About = () => {
   return (
      <>
         <Common
            name="Welcome to the About page of"
            imgsrc={aboutimg}
            visit="/contact"
            btname="Contact Now"
            info="This is Aakash Dev, a tech enthusiast, treveller, and a growing dev developer"
         />
      </>
   )
}

export default About;
