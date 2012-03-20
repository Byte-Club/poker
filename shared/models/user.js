require('./base');

Poker.User = Poker.Model.extend({
  //validates: {
    //firstName: { type: 'string', presence: true },
    //lastName: { type: 'string', presence: true },
    //username: { type: 'string', presence: true }
  //},

  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  bankroll: DS.attr('string'),
  
  //hands: DS.hasMany('Poker.Hand'),
  tables: DS.hasMany('Poker.Table')

});
