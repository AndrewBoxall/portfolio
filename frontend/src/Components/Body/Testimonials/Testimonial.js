import React, { Component } from 'react';
import './Testimonial.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial-wrapper">
        <div className="testimonial">
          <div className="testimonial-image-wrapper">
            <img className="testimonial-img" src={this.props.img} alt="The person who wrote the testimonial"></img>
          </div>
          <div className="testimonial-text-wrapper">
            <FontAwesomeIcon className="quote-mark" icon={faQuoteLeft} />
            <p className="testimonial-quote font-scale">{this.props.quote}</p>
            <FontAwesomeIcon className="quote-mark float-right" icon={faQuoteRight} />
            <h2 className="testimonial-name font-scale">{this.props.name},</h2>
            <p className="testimonial-work font-scale">{this.props.work}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
