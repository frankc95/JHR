import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Testimonials.module.scss";
import { Testimonial } from "./DB/Testimonial";

var settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="4" className={styles.wrapper}>
      {/* Testimonials */}
      <div className={styles.headlineWrap}>
        <h5>testimonial</h5>
        <h2>To Follow Client Satisfaction</h2>
      </div>
      <Slider {...settings}>
        {Testimonial.map((item) => (
          <div className={styles.card} key={item.id}>
            <h6>{item.title}</h6>
            <p>{item.body}</p>
            <div className={styles.innerCard}>
              <Image
                src={item.person.src}
                alt={item.person.alt}
                width={60}
                height={60}
              />
              <div className="">
                <h6>{item.person.name}</h6>
                <h6>{item.person.social}</h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
