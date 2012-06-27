Poker.Table = Ember.Object.extend({
  players: null,

  init: function(){
    this._super();
    var players = this.set('players', new Array(10));
  },

  addPlayer: function(player, chips, position){
    var players = this.get('players');
    player.buyIn = chips;
    if(!position){ position = 1; }
    players.removeAt(position-1);
    players.insertAt(position-1, player);
  }
});