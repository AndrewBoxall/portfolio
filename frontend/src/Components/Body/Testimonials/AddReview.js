import React, { Component } from 'react';
import './AddReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddReview extends Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: this.props.reviews,
      reviewerMessage: '',
      reviewerName: '',
      reviewerPosition: '',
      reviewerCompany: '',
      reviewerRating: 3,
      formOpen: false
    }
    this.updateField = this.updateField.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.writeToDb = this.writeToDb.bind(this);
    this.createReview = this.createReview.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  //TODO extract this function and save it elsewhere. Import it here instead.
  writeToDb(){
    fetch('http://localhost:4000/save' , {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        senderName: this.state.senderName,
        emailAddress: this.state.emailAddress,
        emailBody: this.state.emailBody}),
      headers: {
        'Content-type': 'application/json'
      }
    });
  }
  createReview(e){
    e.preventDefault();

    let newReview = {
      name: this.state.reviewerName,
      work: this.state.reviewerCompany,
      position: this.state.reviewerPosition,
      quote: this.state.reviewerMessage,
      rating: this.state.reviewerRating
    }
    this.props.addAReview(newReview);
    this.resetForm();
  }
  resetForm(){
    document.getElementById('review-rating').childNodes[5 - this.state.reviewerRating].classList.remove('stars-clicked');
    this.setState({
      reviewerMessage: '',
      reviewerName: '',
      reviewerPosition: '',
      reviewerCompany: '',
      reviewerRating: 3
    });
    document.getElementById('review-rating').childNodes[2].classList.add('stars-clicked');
  }
  toggleForm(){
    this.setState({formOpen: !this.state.formOpen});
  }
  updateField(e){
    this.setState({[e.target.name]: e.target.value});
  }
  selectStarRating(stars){
      let currentClickedStar = this.state.reviewerRating;
      document.getElementById('review-rating').childNodes[5 - currentClickedStar].classList.remove('stars-clicked');

      let star = document.getElementById('review-rating').childNodes[5 - stars];
      star.classList.add('stars-clicked');
      this.setState({reviewerRating: stars});
  }

  render() {
    let formClass;

    if(this.state.formOpen){
      formClass = ""
    } else {
      formClass = "toggle-form-display"
    }
    return (
      <div id="add-review">
        <p>Leave a review</p>
        <div>
          {this.state.formOpen &&
            <FontAwesomeIcon className="fa-icon-minus" icon={['fas', 'minus-circle']} onClick={this.toggleForm} />
          }
          {!this.state.formOpen &&
            <FontAwesomeIcon className="fa-icon-plus" icon={['fas', 'plus-circle']} onClick={this.toggleForm} />
          }
        </div>
        <form id="review-form" className={formClass} onSubmit={this.createReview}>
          <div className="review-form-data">
            <label htmlFor="reviewer-message">Message</label>
            <textarea
              id="reviewer-message"
              name="reviewerMessage"
              type="text"
              autoComplete="off"
              required
              value={this.state.reviewerMessage}
              onChange={this.updateField}>
            </textarea>
          </div>
          <div className="review-form-data">
            <label htmlFor="reviewer-name">Name</label>
            <input
              id="reviewer-name"
              name="reviewerName"
              type="text"
              length="25"
              autoComplete="off"
              required
              value={this.state.reviewerName}
              onChange={this.updateField}>
            </input>
          </div>
          <div className="review-form-data">
            <label htmlFor="reviewer-name">Company</label>
            <input
              id="reviewer-company"
              name="reviewerCompany"
              type="text"
              length="25"
              autoComplete="off"
              required
              value={this.state.reviewerCompany}
              onChange={this.updateField}>
            </input>
          </div>
          <div className="review-form-data">
            <label htmlFor="reviewer-position">Position</label>
            <input
              id="reviewer-position"
              name="reviewerPosition"
              type="text"
              length="25"
              autoComplete="off"
              required
              value={this.state.reviewerPosition}
              onChange={this.updateField}>
            </input>
          </div>
          <div id="review-rating">
            <FontAwesomeIcon className="fa-review-star" icon={['fas', 'star']} onClick={this.selectStarRating.bind(this, 5)}/>
            <FontAwesomeIcon className="fa-review-star" icon={['fas', 'star']} onClick={this.selectStarRating.bind(this, 4)}/>
            <FontAwesomeIcon className="fa-review-star stars-clicked" icon={['fas', 'star']} onClick={this.selectStarRating.bind(this, 3)}/>
            <FontAwesomeIcon className="fa-review-star" icon={['fas', 'star']} onClick={this.selectStarRating.bind(this, 2)}/>
            <FontAwesomeIcon className="fa-review-star" icon={['fas', 'star']} onClick={this.selectStarRating.bind(this, 1)}/>
          </div>
          <button type="submit" id="review-add-button">Post review</button>
        </form>
      </div>
    );
  }
}
export default AddReview;
