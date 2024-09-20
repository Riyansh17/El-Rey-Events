// components/Instagram.js
import React, { useEffect, useRef } from 'react';

const Instagram = () => {
  const instagramRef = useRef(null);

  useEffect(() => {
    if (instagramRef.current) {
      const instagram = instagramRef.current;
      const children = Array.from(instagram.children);
      children.forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        instagram.appendChild(duplicateNode);
      });
    }
  }, []);

  return (
    <section className="section section__container instagram__container">
      <h2 className="section__header">~ INSTAGRAM ~</h2>
      <div className="instagram__flex" ref={instagramRef}>
        <a href="https://www.instagram.com/p/C38Lr3XvjIG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (1).jpg" alt="INSTAGRAM" /></a>
        <a href="https://www.instagram.com/p/C30crzBvuIr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (2).jpg" alt="INSTAGRAM" /></a>
        <a href="https://www.instagram.com/p/C4VnwfOxp-E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (3).jpg" alt="INSTAGRAM" /></a>
        <a href="https://www.instagram.com/p/C4YiaEpP639/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (4).jpg" alt="INSTAGRAM" /></a>
        <a href="https://www.instagram.com/p/CJD6AW2ALOr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (5).jpg" alt="INSTAGRAM" /></a>
        <a href="https://www.instagram.com/p/C1xIeeIxRHA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (6).jpg" alt="INSTAGRAM" /></a>
        {/* <a href="https://www.instagram.com/p/C8ujQnZSltC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (7).jpg" alt="INSTAGRAM" /></a> */}
        <a href="https://www.instagram.com/p/C9zjGVoSKN4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><img src="/assets/INSTAGRAM (8).jpg" alt="INSTAGRAM" /></a>
      </div>
    </section>
  );
};

export default Instagram;