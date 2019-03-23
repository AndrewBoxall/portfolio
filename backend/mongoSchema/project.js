var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: {type: String, required: true},
  briefDescription: {type: String, required: true},
  longDescription: {type: String, required: true},
  projectGoals: {type: String, required: true},
  technologiesUsed: {type: String, required: true},
  progress: {type: String, required: true},
  previewImagePath: {type: String, required: true},
  modalImagePath: {type: String, required: true},
  startDate: {type: Date, required: true},
  endDate: {type: Date}
});

module.exports = mongoose.model('Project', projectSchema);
