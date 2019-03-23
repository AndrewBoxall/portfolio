var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testimonialSchema = new Schema({
  name: {type: String, required: true},
  work: {type: String},
  role: {type: String, required: true},
  quote: {type: String, required: true},
  imagePath: {type: String, required: true}
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
