'use strict';

// Done: Initialize your project using NPM to create and populate a package.json file
const express = require('express');
const requestProxy = require('express-request-proxy'); // REVIEW: We've added a new package here to our requirements, as well as in the package.json

// Done: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const app = express();
const PORT = process.env.PORT || 3000;

// Done: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

// Done: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/projectsArr.json', function(request, response){
  console.log(request);
  response.sendFile('data/projectsArr.json', {root: './public'});
});

// REVIEW: This is a new route that will utilize our middle man proxy.
app.get('/github/*', proxyGitHub);

// REVIEW: This is a new proxy method which acts as a 'middle man' (middleware) for our request.
function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

// app.get('/index.html',function(request, response){
// //   response.status(404).sendFile('404',{root: './public'});
// });
app.listen(PORT, function() {
  // Done: Log to the console a message that lets you know which port your server has started on
  console.log('Server is up and running on port 5000 and can be accessed at localhost: 3000 in your local browser');
});
