var Testimonial = require('../mongoSchema/testimonial');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/toastApparel');
mongoose
  .connect('mongodb+srv://Andrew:sxcEPftPmDiDDAat@cluster0-gbspm.mongodb.net/CV?retryWrites=true');


var testimonials = [
  new Testimonial({
  name: 'Mariah Snyder',
  work: 'Tustin Pilates',
  role: 'Pilates Instructor',
  quote: 'I love my website. Its great for discovering and connecting with new clients.',
  imagePath: '/images/client2'
})
];

var readyToDisconnect = 0;
for (var i = 0; i < testimonials.length; i++){
  console.log(testimonials[i]);
  testimonials[i].save(function(err, result){
    readyToDisconnect++;

    if (readyToDisconnect === testimonials.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
