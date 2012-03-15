require('../poker');

Poker.Player = DS.Model.extend({
  name: DS.attr('string'),
  tables: DS.hasMany('Poker.Table')
});

