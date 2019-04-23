import React from 'react';
import './ProjectInfo.css';

//TODO//
//Implement a database to retrieve this information from.
//This works fine while project count is small.
const toastApparelSummary = <div className="project-information">
  <p>A fully functioning online clothing store.<br />
  Including user sessions and customer cart data.</p>
</div>;

const toastApparelDetailed = <div className="project-information">
  <p><em>LaMode clothing</em> is an online retail clothing store.<br /><br />
  The goal of this project was to learn the technology behind creating and operating an online store.
  </p>
  <p>Including:</p>
  <ul className="project-goals">
    <li>The use of cookies to store a customer cart.</li>
    <li>The use of authentication and encryption methods to protect customer information.</li>
    <li>Database technology to manage orders and store purchase history.</li>
  </ul>
  <p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>LESS CSS.</li>
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
  </ul>
</div>;

const tustinPilatesSummary = <div className="project-information">
  <p>A small business website for an independant pilates instructor.<br /><br />
  Used to increase online presence and advertise class offers to clients.</p>
</div>;

const tustinPilatesDetailed = <div className="project-information">
  <p><em>Tustin Pilates</em> is a pilates website to drive business and clients to an independant instructor.<br /><br />
  The goal of this project was to learn React JS and create a single page application.
  </p>
  <p>Including:</p>
  <ul className="project-goals">
    <li>Create a static website.</li>
    <li>Create API's to manage data flow.</li>
  </ul>
  <p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>React.</li>
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
  </ul>
</div>;

const wellnessStudioSummary = <div className="project-information">
  <p>A staff focus web application used to manage a small physical therapy business.<br /><br />
  Store client information to a database. Schedule appointments to a calendar. Login and manage user profiles.</p>
</div>;

const wellnessStudioDetailed = <div className="project-information">
  <p><em>The Wellness Studio</em> is a web application used to manage a small physical therapy business.<br /><br />
  The goal of this project was to make a real world backend business application that could be used in a work place.
  </p>
  <p>Including:</p>
  <ul className="project-goals">
    <li>Single page application.</li>
    <li>Calandar model to book clients.</li>
    <li>Authentication and encryption tools to protect customer and staff information.</li>
    <li>Database technology to manage logins.</li>
    <li>Account management and privileges.</li>
  </ul>
  <p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>React.</li>
    <li>Node JS with Express.</li>
    <li>MS SQL DB.</li>
  </ul>
</div>;

const teacherSubHubSummary = <div className="project-information">
  <p>A react native application used to help schools reach relief teachers
  for empty classes quickly and stress free.</p>
</div>;

export {
  toastApparelSummary,
  toastApparelDetailed,
  tustinPilatesSummary,
  tustinPilatesDetailed,
  wellnessStudioSummary,
  wellnessStudioDetailed,
  teacherSubHubSummary
}
