/*globals Poker spyOn*/
var libPath = process.env.POKER_COV ? '../../../coverage/shared' : '../../../shared';

require('../../spec_helper');
require(libPath + '/models/table');


describe('Poker.Table', function(){
  var subject;

  beforeEach(function(){
    subject = Poker.Table.create();
  });

  //players
  //player layout
  //dealer button
  describe('.addPlayer', function(){
    var fakePlayer;

    beforeEach(function(){
       fakePlayer = {id: 1, name: 'Player 1'};
    });

    it('needs a player object', function(){
      subject.addPlayer(fakePlayer);
      expect(subject.get('players')).to.include(fakePlayer);
    });

    it('needs chips', function(){      
      subject.addPlayer(fakePlayer, 100);
      expect(fakePlayer.buyIn).to.equal(100);
    });

    it('needs a position', function(){
      subject.addPlayer(fakePlayer, 100, 4);
      var playersArray = subject.get('players'),
          //playerTarget should be fakePlayer if everything is working
          playerTarget = playersArray.objectAt(3);
      expect(playerTarget).to.equal(fakePlayer);
    });    
  });

  describe('players', function(){
    it('contains the players currently at the table');
    it('contains a buyIn property for each player');
    it('contains the position of each player');
    it('contains a sittingOut status for each player');
  });

  //deck of cards
  describe('deck', function(){

  });

  describe('which game are we playing?', function(){

  });

  //active hand of poker
  describe('hand', function(){
      //rules of the game
    describe('rules', function(){

    });
    it('has players remaining');
    it('is their turn to play');

    it('which player needs to post the small blind?');
    it('which player needs to post the big blind?');
    it('which player(s) need to post an ante?');

    it('has a pot');
    it('has community cards');
  });

});