// components/Testimonials.js
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination, Autoplay],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 9000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section
      id="client"
      className="section section__container client__container"
    >
      <h2 className="section__header">~ TESTIMONIALS ~</h2>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="client__card">
              <img src="assets/client-1.jpg" alt="client" />
              <p>
                "El Rey Events made our wedding day absolutely perfect. Their
                attention to detail and creativity exceeded our expectations!"
              </p>
              <h4>Priyal & Ashutosh</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src="assets/client-2.jpg" alt="client" />
              <p>
                "Working with Himanshu and his team was a breeze. They handled
                our corporate retreat flawlessly, impressing all our
                executives."
              </p>
              <h4>Ranjeet & Anidhya</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src="assets/client-3.jpg" alt="client" />
              <p>
                ""The destination wedding El Rey planned for us in Udaipur was
                like a fairytale. Our guests are still talking about it!"
              </p>
              <h4>VIjay & Ankita</h4>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="client__card">
              <img src="assets/client-4.jpg" alt="client" />
              <p>
                "El Rey's decor for our engagement party was breathtaking. They
                truly have an eye for beauty and elegance."
              </p>
              <h4>Nikhil & Priyanka</h4>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
