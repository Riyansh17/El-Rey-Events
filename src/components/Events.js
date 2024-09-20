import React from 'react';

const Events = () => {
  return (
    <section className="section__container portfolio__container">
      <h2 className="section__header">~ Events ~</h2>
      <div className="portfolio__grid">
        <div className="portfolio__card">
          <img src="assets/portfolio-1.jpg" alt="portfolio" />
          {/* <div className="portfolio__content">VIEW PORTFOLIO</div> */}
        </div>
        <div className="portfolio__card">
          <img src="assets/portfolio-2.jpg" alt="portfolio" />
          {/* <div className="portfolio__content">VIEW PORTFOLIO</div> */}
        </div>
        <div className="portfolio__card">
          <img src="assets/portfolio-3.jpg" alt="portfolio" />
          {/* <div className="portfolio__content">VIEW PORTFOLIO</div> */}
        </div>
      </div>
    </section>
  );
};

export default Events;