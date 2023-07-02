import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTACT ME"
        text="Let's chat about any new projects or opportunities we may bring each other" />
      <Footer />
    </div>
  )
}

export default Contact