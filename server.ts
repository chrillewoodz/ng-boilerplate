// // Load zone.js for the server.
// require('zone.js/dist/zone-node');

// var fs = require('fs')

// // Import renderModuleFactory from @angular/platform-server.
// var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// // Import the AOT compiled factory for your AppServerModule.
// // This import will change with the hash of your built server bundle.

// var files = fs.readdirSync(`${process.cwd()}/dist-server`);
// var mainFiles = files.filter(file => file.startsWith('main'));
// var hash = mainFiles[0].split('.')[1];

// var AppServerModuleNgFactory = require(`./dist-server/main.${hash}.bundle`).AppServerModuleNgFactory;

// // Load the index.html file.
// var index = fs.readFileSync('./dist/index.html', 'utf8');

// // Render to HTML and log it to the console.
// renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/'})
//   .then(html => fs.writeFileSync('dist/index.html', html));



import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import {platformServer, renderModuleFactory} from '@angular/platform-server';
import {enableProdMode} from '@angular/core';
import * as express from 'express';
import {readFileSync} from 'fs';
import {join} from 'path';

const fs = require('fs');

const files = fs.readdirSync(`${process.cwd()}/dist-server`);
const mainFiles = files.filter(file => file.startsWith('main'));
const hash = mainFiles[0].split('.')[1];
const AppServerModuleNgFactory = require(`./dist-server/main.${hash}.bundle`).AppServerModuleNgFactory;

const PORT = 4000;

enableProdMode();

const app = express();

const template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {

  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
