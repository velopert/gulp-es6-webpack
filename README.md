# gulp-es6-webpack

This project use gulps to automize the process of transpiling ES6 files in both client-side and server-side. Webpack is used to support CommonJS style in client-side. 

In this project, 
* The gulpfile is written in ES6 syntax
* Express.js server is written in ES6 syntax
* When there is a change in server code, the code will be transpiled automatically, then it will trigger the server to restart.
* Client-side JavaScript is written in ES6 syntax
* When there is a change in client-side, browser-sync will trigger the browser to referesh
* html and css is minified by gulp plugins
