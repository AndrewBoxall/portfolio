import React, { Component } from 'react';
import './TestimonialsSection.css';

import Testimonial from './Testimonial';
import Review from './Review';
import AddReview from './AddReview';

//TODO: Implement mongoDB to pull review and testimonial data from the backend.
// Then remove this hardcoded file. Or make a check for if the DB is accessible and use only as needed.
import {reviews, testimonials} from './ReviewsAndTestimonials.js';

class TestimonialsSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews,
      testimonials
    };
    this.addReview = this.addReview.bind(this);
    this.moveTestimonial = this.moveTestimonial.bind(this);
  }
  addReview(newReview){
    this.setState({reviews: [...this.state.reviews, newReview]});
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
  render() {
    return (
      <div id="testimonials-section">
        <h2 id="testimonials-section-title">Testimonials</h2>
        <p>See what people have to say about me, and leave your own comment.</p>
        <div id="testimonials-carousel">
          <div id="slide-wrapper" className="margin-transition">
          {this.state.testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              work={testimonial.work}
              img={testimonial.img}
              quote={testimonial.quote}
              />
          ))}
          </div>
        </div>
        <div className="reviews-container">
          {this.state.reviews.map((reviewer, index) => (
            <Review
              key={index}
              name={reviewer.name}
              work={reviewer.work}
              position={reviewer.position}
              quote={reviewer.quote}
              rating={reviewer.rating}
            />))
          }
          <AddReview addAReview={this.addReview}/>
        </div>
      </div>
    );
  }
}

export default TestimonialsSection;
