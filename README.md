# portfolio

# Info:

Hosted on AWS lightsail. Can be viewed by going to http://aboxit.com

# Improvements / required features still to implement:
<ul>
  <li>Add https support</li>
  <li>Change some images/graphics I dislike/li>
  <li>Swap img tags for picture tags for responsive design and page performance.</li>
  <li>Add Mongo DB and change some hard written parts to pull from DB instead</li>
  <li>Add in encrypting user data on submitting email form to backend</li>
  <li>Sanatise user imput for form inputs</li>
  <li>Implement other projects: Host them on same server, not sure about domain names. Fix visit sight button so it redirects to them.</li>
  <li>Add in response if email fails to hit backend and properly send</li>
  <li>Defer loading images, JS and CSS where appropriate for page performance</li>
</ul>

# Bugs to fix:
<ul>
  <li>Fix 0.5s delay between project modal opening and img on it appearing</li>
  <li>Fix when email input is invalid, the floating label will close down over the input and overlap words</li>
  <li>Fix testimonial img and font size scaling for mobile</li>
  <li>Fix when page resizes, contact icons bob up and down</li>
  <li>Removed email subject from frontend so need to remove processing it in backend</li>
  <li> Since CV is static file, should just serve it from front end public/static files folder. Not backend one</li>
</ul>
