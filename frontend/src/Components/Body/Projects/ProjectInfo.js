import React from 'react';
import './ProjectInfo.css';

//TODO//
//Implement a database to retrieve this information from.
//This works fine while project count is small.
const lamodeSummary = <div className="project-information">
  <p>Lamode Clothing is a fully functioning online clothing store.<br />
  Including user sessions and customer cart data.</p>
</div>;

const lamodeDetailed = <div className="project-information">
  <p><em>LaMode clothing</em> is an online retail clothing store.<br /><br />
  The goal of this project was to learn React JS, as well as what technologies and securities are behind creating
   and operating an online store.
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
    <li>Node JS with Express.</li>
    <li>Mongo DB.</li>
  </ul>
</div>;

const amourSummary = <div className="project-information">
  <p>A personal business website for an independant pilates instructor.<br /><br />
  Used to increase online presence and advertise class offers to clients.</p>
</div>;

const amourDetailed = <div className="project-information">
  <p><em>Amour du Corps Pilates</em> is a pilates website to drive business and clients to an independant instructor.<br /><br />
  The goal of this project was to use a different web stack, PHP and .NET to create a single page application 
  and to host the project and gain familiarity with Microsoft Azure.
  </p>
  <p>Including:</p>
  <ul className="project-goals">
    <li>Use MS Azure to host the completed project.</li>
    <li>Develope a website in .Net and Azure.</li>
  </ul>
  <p className="">Technologies used:</p>
  <ul className="project-tech-stack">
    <li>HTML, CSS & Javascript.</li>
    <li>.Net</li>
    <li>PHP</li>
    <li>Azure</li>
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
  lamodeSummary,
  lamodeDetailed,
  amourSummary,
  amourDetailed,
  wellnessStudioSummary,
  wellnessStudioDetailed,
  teacherSubHubSummary
}
