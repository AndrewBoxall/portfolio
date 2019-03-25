import React, { Component } from 'react';
import './TestimonialText.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TestimonialText extends Component {
  render() {
    return (
        <div className="testimonial-sm-wrapper">
          <p>"{this.props.quote}"</p>
          <h2>{this.props.name},</h2>
          <p>{this.props.position} - {this.props.work}</p>

          <div className="star-rating">
            <FontAwesomeIcon className="fa-icon-star" icon={['fas', 'star']} />
            <FontAwesomeIcon className="fa-icon-star" icon={['fas', 'star']} />
            <FontAwesomeIcon className="fa-icon-star" icon={['fas', 'star']} />
            <FontAwesomeIcon className="fa-icon-star" icon={['fas', 'star']} />
            <FontAwesomeIcon className="fa-icon-star" icon={['fas', 'star']} />
          </div>
        </div>
    );
  }
}

export default TestimonialText;
