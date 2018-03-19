"use strict";

const peupler = require("./mes_modules/peupler");
const express = require('express');
const fs = require("fs");
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient; // le pilote MongoDB
const ObjectID = require('mongodb').ObjectID;

const util = require("util");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


/* on associe le moteur de vue au module «ejs» */
app.set('view engine', 'ejs'); // générateur de template



fs.readFile('toto.txt', (err,resultat) => {
	if (err) console.log (err)
	console.log(peupler())
})

