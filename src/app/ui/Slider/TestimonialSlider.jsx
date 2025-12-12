import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/testimonial_4.jpeg',
    testimonialText:
      'Fine Work Advertisements transformed our cafe with stunning laser-cut wall panels and a beautiful neon sign. The precision and quality of their work is exceptional. Our customers constantly compliment the aesthetic, and it has become a signature feature of our space.',
    avatarName: 'Sarah Ahmed',
    avatarDesignation: 'Cafe Owner, Lahore',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'The 3D acrylic lettering for our storefront exceeded all expectations. The craftsmanship is top-notch, and the illuminated signage has significantly increased our visibility. Professional service from start to finish. Highly recommend Fine Work Advertisements!',
    avatarName: 'Muhammad Bilal',
    avatarDesignation: 'Store Manager',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_3.jpeg',
    testimonialText:
      'We needed custom metal signage for our corporate office, and Fine Work delivered beyond our expectations. The attention to detail and durability of their work is impressive. The team was professional, timely, and understood our brand vision perfectly.',
    avatarName: 'Fatima Khan',
    avatarDesignation: 'Store Owner',
    ratings: '4.5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Outstanding work on our restaurant lightbox and outdoor advertising board. The quality is premium, weather-resistant, and looks fantastic both day and night. Fine Work Advertisements is our go-to for all signage needs in Lahore.',
    avatarName: 'Ali Raza',
    avatarDesignation: 'Restaurant Owner',
    ratings: '5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
