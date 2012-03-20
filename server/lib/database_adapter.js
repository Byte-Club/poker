require('../../shared/poker');

var mongodb = require('mongodb');

Poker.MongoAdapter = DS.Adapter.extend({
	host: '127.0.0.1',
	port: 27017,
	db: 'poker',

	/**** Database Setup ****/
	init: function() {
		this.set('server', new mongodb.Server(this.get('host'), this.get('port'), {}));
		this.set('database', new mongodb.Db(this.get('db'), this.server, {}));
		this._super();
	},

	connect: function() {
		this.database.open(function(err, client) {
			if (err) throw err;
			this.set('client', client);
		}.bind(this));
	},

	clientDidLoad: function() {
		var actionsQ = this.get('actionsQueue');
		for (var idx = 0, len = actionsQ.length; idx < len; idx++) {
			var action = actionsQ.pop();
			this[action.name].call(this, action.store, action.type, action.data);
		}
	}.observes('client'),

	collections: {},
	getCollection: function(type) {
		var cleanType = this.cleanType(type);
		//FIXME: cacheing not working as expected
		//var collections = this.get('collections');
		//if (!collections[cleanType]) {
			//collections[cleanType] = new mongodb.Collection(this.client, cleanType);
		//}
		//return collections[cleanType];
		return new mongodb.Collection(this.client, cleanType);
	},

	/**** Queueing while DB is connecting ****/
	actionsQueue: [],
	queueAction: function(action, store, type, data) {
		this.actionsQueue.push({
			name: action,
			store: store,
			type: type,
			data: data
		});
	},

	/****  Helpers ****/
	cleanType: function(type) {
		return type.replace(/Poker\./, '');
	},

	/**** API methods ****/
	find: function() {},

	findMany: function() {},

	findQuery: function() {},

	findAll: function() {},

	createRecord: function(store, type, model) {
		this.createRecords(store, type, [model]);
	},

	createRecords: function(store, type, data) {
		if (!this.get('client')) {
			this.queueAction('createRecords', store, type, data);
			return;
		}
		this.getCollection(type).insert(data, {
			safe: true
		},
		function(err, objects){
			this.createCallback(err, store, data, objects);
		}.bind(this));
	},

	createCallback: function(err, store, data, objects) {
		if (err) {
			throw err.message;
		}
		store.didCreateRecords(type, data, objects);
	},

	updateRecord: function() {},

	updateRecords: function() {},

	deleteRecord: function() {},

	deleteRecords: function() {},

	commit: function() {}
});

