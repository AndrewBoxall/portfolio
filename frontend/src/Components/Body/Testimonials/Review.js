import React, { Component } from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Review extends Component {
  render() {
    let rating = [];
    for (var i = 0; i < this.props.rating; i++){
      rating.push(<FontAwesomeIcon className="fa-icon-star" icon={['fas', 'star']} key={i}/>);
    }
    return (
        <div className="review">
          <p>"{this.props.quote}"</p>
          <h2>{this.props.name},</h2>
          <p>{this.props.position} - {this.props.work}</p>
          <div className="rating">
            {rating}
          </div>
        </div>
    );
  }
}
export default Review;
