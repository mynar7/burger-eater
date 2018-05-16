# burger-eater

## Overview
This app employs an MVC architecture to deliver a webpage that allows clients to read, create, and update burger types with persistent data storage. On visiting the main page, the site reads a MySQL database to display burgers. 

When the user clicks the "Devour" button, the client side sends an ajax post request using jQuery to the server to update that burger to devoured, and then forces a page refresh to display the updated burgers. 

When a user adds a new burger, the submit button uses native html form submission to send that data to the server and then the server responds with a redirect to the home page, again updating burger listings.

## Technologies
* HTML
* CSS
* jQuery
* node
* express
* express-handlebars
* MySQL
* heroku/JAWSDB for deployment
