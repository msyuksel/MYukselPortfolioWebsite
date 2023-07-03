import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
import PricingCard from '../components/PricingCard';

//add <PricingCard/> if you want that feature
const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS"
        text="A showcase of my portfolio" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project