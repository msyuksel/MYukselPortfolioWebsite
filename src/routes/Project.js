import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import WorkCard from '../components/WorkCard';

//add <PricingCard/> if you want that feature
const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS"
        text="A showcase of my portfolio" />
      <WorkCard /> 
      <Footer />
    </div>
  )
}

export default Project