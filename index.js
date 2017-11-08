/**
 * This is the main file of the application.
 */
// cfenv acceso a Cloud Foundry environment
// ver: https://www.npmjs.com/package/cfenv
// var cfenv = require('cfenv');
var express = require('express');
// crea express web app:
var app = express();
// Configura express config.js
require('./config')(app);
console.log('Config OK');
// Agrega routes y maneja routes.js
require('./routes')(app);
console.log('Routes OK');
// `node index.js`. Inicia servidor
app.listen(process.env.PORT||3000);
// print a message when the server starts listening
console.log("server starting");
