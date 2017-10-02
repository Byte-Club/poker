Poker Project
=============

This is an experiment to use the same model code on both the client and
server. The goal is for website users to be able to play a game of poker.

Installing Dependencies
=======================

Dependencies are declared inside of the project's package.json file and
can be installed using npm:

	npm install

The app uses MongoDB for data persistence. See the [MongoDB quickstart
guide](http://www.mongodb.org/display/DOCS/Quickstart) for how to install mongo.

A node-compatible version of the [Ember.js runtime + states](http://www.emberjs.org) and the [Ember data](http://www.github.com/emberjs/data) libraries are included inside of the server/vendor folder.

Running Tests
=============

	make test

Tests are written using [mocha.js](http://mochajs.org/) and [chai.js](http://chaijs.com/). 
