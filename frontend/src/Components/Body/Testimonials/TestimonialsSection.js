import React, { Component } from 'react';
import './TestimonialsSection.css';

import Testimonial from './Testimonial';
import TestimonialText from './TestimonialText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import client1 from '../../../images/client1.jpg';
import client2 from '../../../images/client2.jpg';
import client3 from '../../../images/client3.jpg';

class TestimonialsSection extends Component {
  constructor(props){
    super(props);
    this.moveTestimonial = this.moveTestimonial.bind(this);
  }
  moveTestimonial(){
    var slideWrapper = document.getElementById('slide-wrapper');

    if (this.leftMargin < -3840) {
      slideWrapper.classList.remove("margin-transition");
      this.leftMargin = 0;
      slideWrapper.style.marginLeft = this.leftMargin + 'px';
    } else {
      slideWrapper.classList.add("margin-transition");
      this.leftMargin = this.leftMargin - 1920;
      slideWrapper.style.marginLeft = this.leftMargin + 'px';
    }
  }
  componentDidMount(){
    this.leftMargin = 0;
    this.carouselInterval = setInterval(
      () => this.moveTestimonial(), 9000
    );
  }
  componentWillUnmount(){
    clearInterval(this.carouselInterval);
  }
  render() {
    return (
      <div id="testimonials-section">
        <h2 id="testimonials-section-title">Testimonials</h2>
        <p>See what people have to say about me, and leave your own comment.</p>
        <div id="testimonials-carousel">
          <div id="slide-wrapper" className="margin-transition">
            <Testimonial
              name="Joshua Morrow"
              work="Marketing - GG inc."
              img={client1}
              quote="Andrew is a very talented and well rounded worker."
            />
            <Testimonial
              name="Mariah Snyder"
              work="Pilates Instructor - Tustin Pilates"
              img={client2}
              quote="I love my website. Its great for reaching new customers."
            />
            <Testimonial
              name="Brad Pit"
              work="Actor"
              img={client3}
              quote="He's a great guy."
            />
            <Testimonial
              name="Joshua Morrow"
              work="Marketing - GG inc."
              img={client1}
              quote="Andrew is a very talented and well rounded worker."
            />
          </div>
        </div>
        <div className="container-row-test">
          <TestimonialText
            name="Mike Totts"
            work="World Wide Routing"
            position="Network technician"
            quote="Andrew worked harder than anyone else to make sure our project was delivered ontime and onspec."
          />
          <TestimonialText
            name="Tom Samson"
            work="The Ad Agency"
            position="Marketing"
            quote="Top candidate"
          />
          <TestimonialText
            name="Jade Johnson"
            work="Google"
            position="Scrum Master"
            quote="You won't find a better employee."
          />
          <div className="leave-a-review">
            <p>Leave a review</p>
            <div>
              <FontAwesomeIcon className="fa-icon-plus" icon={['fas', 'plus-circle']} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialsSection;
