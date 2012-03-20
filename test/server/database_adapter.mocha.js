require('../spec_helper');

var path = require('path'),
mongodb = require('mongodb');

require(path.join('..', '..', 'server', 'lib', 'database_adapter'));

describe('Poker.MongoAdapter', function() {
	var subject, store;
	beforeEach(function() {
		store = DS.Store.create({
			revision: 3
		});
		subject = Poker.MongoAdapter.create({
			db: 'poker_test'
		});
	});

	afterEach(function(){
		subject.database.close();
		subject.destroy();
	});

	describe('connect', function() {
		it('opens a connection to the database', function(done) {
			subject.clientDidLoad = function() {
				expect(subject.get('client')).to.exist;
				done();
			};
			subject.connect();
		});

	});

	describe('API methods', function() {
		beforeEach(function() {
			subject.connect();
		});

		describe('createRecord', function() {
			it('creates a record in the database', function(done) {
				subject.createCallback = done;
				subject.createRecord(store, 'Poker.TestRecord', {
					testSolo: true
				});
			});
		});

		describe('createRecords', function() {
			it('creates multiple records in the database', function(done) {
				subject.createCallback = done;
				subject.createRecords(store, 'Poker.TestRecord', [
					{ testMulti1: 'indeed' },
					{ testMulti2: 'yes' }
				]);
			});
		});
	});
});

