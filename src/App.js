import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Events from './components/Events';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';

import './styles.css';

const App = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
    ScrollReveal().reveal(".about__container .section__description", {
      ...scrollRevealOption,
      delay: 500,
      interval: 500,
    });
    ScrollReveal().reveal(".about__container img", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".service__container .section__header", scrollRevealOption);
    ScrollReveal().reveal(".service__container .section__description", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".service__card", {
      duration: 1000,
      delay: 1000,
      interval: 500,
    });

    ScrollReveal().reveal(".blog__content .section__header", scrollRevealOption);
    ScrollReveal().reveal(".blog__content h4", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".blog__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".blog__content .blog__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
    
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Events />
      <Services />
      <Testimonials />
      <Gallery />
      <Blog />
      <Instagram />
      <Footer />
    </div>
  );
};

export default App;