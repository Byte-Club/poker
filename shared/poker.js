require('../server/vendor/ember-node.js');
require('../server/vendor/ember-data.js');

Poker = Ember.Application.create({
	store: DS.Store.create({
		revision: 3
	})
});

