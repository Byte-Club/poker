var libPath = process.env.POKER_COV ? '../../../coverage/shared': '../../../shared';

require('../../spec_helper');
require(libPath + '/models/user');

describe('Poker.User', function() {
	var subject;
	beforeEach(function() {
		subject = Poker.User.createRecord({
    });
	});

	//describe('Validations', function(){});

  describe('Associations', function(){
    it('has many tables');
   });
});

