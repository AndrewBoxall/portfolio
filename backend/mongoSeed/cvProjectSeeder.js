var Project = require('../mongoSchema/project');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/toastApparel');
mongoose.connect('mongodb+srv://Andrew:sxcEPftPmDiDDAat@cluster0-gbspm.mongodb.net/test?retryWrites=true');

var projects = [
  new Project({
  name: 'Tustin Pilates',
  briefDescription: 'A small business website for an independant pilates instructor.<br />Used to increase online presence and advertise class offers to clients.',
  longDescription: '<em>Tustin Pilates</em> is a pilates website to drive business and clients to an independant instructor.<br /><br />The goal of this project was to learn React JS and create a single page application.',
  projectGoals: `'<p>Including:</p>
  <ul className="project-goals">
    <li>The use of reusable components.</li>
    <li>Single page application.</li>
    <li>Authentication and encryption tools to protect customer information.</li>
    <li>Database technology to manage client session bookings.</li>
  </ul>'`,
  technologiesUsed: `<p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>React.</li>
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
  </ul>`,
  progress: 'complete',
  previewImagePath: '/images/pilatesWebsite',
  modalImagePath: '/images/tustinPilatesBanner',
  startDate: new Date(),
  endDate: null
  }),
  new Project({
  name: 'Tustin Pilates',
  briefDescription: 'A small business website for an independant pilates instructor.<br />Used to increase online presence and advertise class offers to clients.',
  longDescription: '<em>Tustin Pilates</em> is a pilates website to drive business and clients to an independant instructor.<br /><br />The goal of this project was to learn React JS and create a single page application.',
  projectGoals: `'<p>Including:</p>
  <ul className="project-goals">
    <li>The use of reusable components.</li>
    <li>Single page application.</li>
    <li>Authentication and encryption tools to protect customer information.</li>
    <li>Database technology to manage client session bookings.</li>
  </ul>'`,
  technologiesUsed: `<p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>React.</li>
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
  </ul>`,
  progress: 'complete',
  previewImagePath: '/images/pilatesWebsite',
  modalImagePath: '/images/tustinPilatesBanner',
  startDate: new Date(),
  endDate: null
  }),
  new Project({
  name: 'Tustin Pilates',
  briefDescription: 'A small business website for an independant pilates instructor.<br />Used to increase online presence and advertise class offers to clients.',
  longDescription: '<em>Tustin Pilates</em> is a pilates website to drive business and clients to an independant instructor.<br /><br />The goal of this project was to learn React JS and create a single page application.',
  projectGoals: `'<p>Including:</p>
  <ul className="project-goals">
    <li>The use of reusable components.</li>
    <li>Single page application.</li>
    <li>Authentication and encryption tools to protect customer information.</li>
    <li>Database technology to manage client session bookings.</li>
  </ul>'`,
  technologiesUsed: `<p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>React.</li>
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
  </ul>`,
  progress: 'complete',
  previewImagePath: '/images/pilatesWebsite',
  modalImagePath: '/images/tustinPilatesBanner',
  startDate: new Date(),
  endDate: null
  }),
  new Project({
  name: 'Tustin Pilates',
  briefDescription: 'A small business website for an independant pilates instructor.<br />Used to increase online presence and advertise class offers to clients.',
  longDescription: '<em>Tustin Pilates</em> is a pilates website to drive business and clients to an independant instructor.<br /><br />The goal of this project was to learn React JS and create a single page application.',
  projectGoals: `'<p>Including:</p>
  <ul className="project-goals">
    <li>The use of reusable components.</li>
    <li>Single page application.</li>
    <li>Authentication and encryption tools to protect customer information.</li>
    <li>Database technology to manage client session bookings.</li>
  </ul>'`,
  technologiesUsed: `<p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>React.</li>
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
  </ul>`,
  progress: 'complete',
  previewImagePath: '/images/pilatesWebsite',
  modalImagePath: '/images/tustinPilatesBanner',
  startDate: new Date(),
  endDate: null
  })
];

var readyToDisconnect = 0;
for (var i = 0; i < projects.length; i++){
  console.log(projects[i]);
  projects[i].save(function(err, result){
    readyToDisconnect++;

    if (readyToDisconnect === projects.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
