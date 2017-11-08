/**
 * This file runs some configuration settings on your express application.
 */
// handlebars
var handlebars = require('express-handlebars');
var express = require('express');
// Este modulo devuelve una funcion a index.js
module.exports = function(app){
	// Registra y configura handlebars templating engine
	app.engine('html', handlebars({
		defaultLayout: 'main',
		extname: ".html",
		layoutsDir: __dirname + '/views/layouts'
	}));

	// .html como default template extension
	app.set('view engine', 'html');

	// Templates
	app.set('views', __dirname + '/views');

	// Hace la carpeta public visible
	app.use(express.static(__dirname + '/public'));

	// Parse POST request data. It will be available in the req.body object
	// Parse POST REQ. Estará disponible en req.body object
	app.use(express.urlencoded());
};
