import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';


const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS"
        text="A showcase of my portfolio" />
      <Footer />
    </div>
  )
}

export default Project