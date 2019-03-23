import React, { Component } from 'react';
import './TestimonialText.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class TestimonialText extends Component {
  render() {
    return (
        <div className="testimonial-sm-wrapper">
          <p className="testimonial-sm-quote">"{this.props.quote}"</p>
          <h2>{this.props.name},</h2>
          <p className="testimonial-sm-work">{this.props.position} - {this.props.work}</p>

          <div className="star-rating">
            <FontAwesomeIcon className="fa-icon-star" icon={faStar} />
            <FontAwesomeIcon className="fa-icon-star" icon={faStar} />
            <FontAwesomeIcon className="fa-icon-star" icon={faStar} />
            <FontAwesomeIcon className="fa-icon-star" icon={faStar} />
            <FontAwesomeIcon className="fa-icon-star" icon={faStar} />
          </div>
        </div>
    );
  }
}

export default TestimonialText;
