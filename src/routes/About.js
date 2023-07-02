import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';


const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT ME"
        text="I'm a developer" />
      <Footer/>
    </div>
  )
}

export default About