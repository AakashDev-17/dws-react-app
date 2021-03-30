import React from 'react';
import homeimg from "../src/images/homeImg.png";
import Common from "./Common";

const Home = () => {
   return (
      <>
         <Common
            name="Grow your business with"
            imgsrc={homeimg}
            visit="/service"
            btname="Get Started"
            info="We are the team of talanted developers making your business attractive and easy to access"
         />
      </>
   )
}

export default Home;
