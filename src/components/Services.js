import React from "react";

const Services = () => {
  return (
    <section id="service" className="section service">
      <div className="section__container service__container">
        <h2 className="section__header">~ SERVICES ~</h2>
        <p className="section__description">
          At El Rey Events, we offer comprehensive event planning and management
          services. Our team handles every aspect of your special day, from
          venue selection and decor to catering and entertainment. We work
          closely with you to bring your vision to life, ensuring a stress-free
          and magical experience.
        </p>
        <div className="service__grid">
          <div className="service__card">
            <h4>Wedding Planning</h4>
            <p>
              We orchestrate every detail of your dream wedding, from
              conceptualization to execution, creating a seamless and enchanting
              celebration.
            </p>
          </div>
          <div className="service__card">
            <h4>Corporate Events</h4>
            <p>
              Elevate your business gatherings with our expert planning,
              ensuring professional and impressive events that leave a lasting
              impact.
            </p>
          </div>
          <div className="service__card">
            <h4>Destination Management</h4>
            <p>
              Let us showcase the best of Udaipur, arranging accommodations,
              transportation, and unique experiences for your out-of-town
              guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
