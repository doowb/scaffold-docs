'use strict';

var writeFile = require('write');
var Metadata = require('metadata');
var metadata = new Metadata();
metadata.set('name', 'scaffold-docs');
metadata.set('description', 'Scaffold to add a docs to your project.');
metadata.set('repository', 'https://github.com/doowb/scaffold-docs');
metadata.set('homepage', 'https://github.com/doowb');
metadata.set('authors', [{author: 'Brian Woodward', homepage: 'https://github.com/doowb', email: 'brian.woodward@gmail.com'}]);
metadata.addTarget('docs', {src: 'docs/**/*.md', dest: './docs'});

writeFile('manifest.json', JSON.stringify(metadata, null, 2));
