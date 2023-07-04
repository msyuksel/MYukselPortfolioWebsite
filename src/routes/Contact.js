import React from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2
        heading="CONTACT ME [UNDER DEVELOPEMENT]"
        text={<span>My email is <a href="mailto:myukseldev@gmail.com">MYukseldev@gmail.com</a>. Let's chat about any new projects or opportunities</span>}
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
