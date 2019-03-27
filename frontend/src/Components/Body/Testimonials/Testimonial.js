import React, { Component } from 'react';
import './Testimonial.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial-wrapper">
        <div className="testimonial">
          <div className="testimonial-image-wrapper">
            <img className="testimonial-img" src={this.props.img} alt="The person who wrote the testimonial"></img>
          </div>
          <div className="testimonial-text-wrapper">
            <FontAwesomeIcon className="quote-mark" icon={['fas', 'quote-left']} />
            <p className="testimonial-quote font-scale">{this.props.quote}</p>
            <FontAwesomeIcon className="quote-mark float-right" icon={['fas', 'quote-right']} />
            <h2 className="testimonial-user font-scale">{this.props.name}</h2>
            <p className="testimonial-user font-scale">{this.props.work}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
