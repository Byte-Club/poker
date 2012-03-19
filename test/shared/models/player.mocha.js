/*globals Poker spyOn*/
var libPath = process.env.POKER_COV ? '../../../coverage/shared' : '../../../shared';
require('../../spec_helper');
require(libPath + '/models/player');

describe('Poker.Player', function(){
  var subject;
  //beforeEach(function(){
    //subject = Poker.Player.create({ name: 'Chris' }); 
  //});
  //describe('Properties', function(){
    //it('has a name property', function(){
      //expect(subject.get('name')).to.equal('Chris');
    //});
  //});
});
