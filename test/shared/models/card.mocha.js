/*globals Poker spyOn*/
var libPath = process.env.POKER_COV ? '../../../coverage/shared' : '../../../shared';

require('../../spec_helper');
require(libPath + '/models/card');

//Card values should map to this array
Poker.Spec = {
	CARD_VALUES: [
    '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As', //spades
    '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah', //hearts
    '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad', //diamonds
    '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac'  //clubs
	]
};

describe("Poker.Card", function() {
	var subject, testCard;

	beforeEach(function() {
		subject = Poker.Card;
	});

	describe('Constructor', function() {
		it('stores the internal value of the card', function() {
			testCard = new subject(51);
			expect(testCard.get('_cardNumber')).to.equal(51);
		});

		it('creates a new Poker.Object', function() {
			testCard = new subject(51);
			expect(testCard instanceof Poker.Object).to.be.true;
		});
	});


	describe('Validations', function() {
		it('throws an error for a cardNumber below 0', function() {
			testCard = function() {
				return new subject(-1);
			};
			expect(testCard).to.throw();
		});

		it('throws an error for a cardNumber above 51', function() {
			testCard = function() {
				return new subject(75);
			};
			expect(testCard).to.throw();
		});

		it('does NOT throw an error for a cardNumber between 0-51', function() {
			testCard = function() {
				return new subject(35);
			};
			expect(testCard).not.to.throw();
		});
	});

	describe('Computed Properties', function() {
		describe('faceValue', function() {
			it("returns the numeric value of cards 2-9", function() {
				testCard = new subject(0);
				expect(testCard.get('faceValue')).to.equal('2');
				testCard = new subject(7);
				expect(testCard.get('faceValue')).to.equal('9');
			});

			it("returns the alpha value of cards AJKQT", function() {
				testCard = new subject(12);
				expect(testCard.get('faceValue')).to.equal('A');
				testCard = new subject(11);
				expect(testCard.get('faceValue')).to.equal('K');
				testCard = new subject(10);
				expect(testCard.get('faceValue')).to.equal('Q');
				testCard = new subject(9);
				expect(testCard.get('faceValue')).to.equal('J');
				testCard = new subject(8);
				expect(testCard.get('faceValue')).to.equal('T');
			});

		});

		describe('numericValue', function() {
			it("returns the numeric value of face cards", function() {
				testCard = new subject(12); //A = 14	
				expect(testCard.get('numericValue')).to.equal(14);
				testCard = new subject(11); //K = 13
				expect(testCard.get('numericValue')).to.equal(13);
				testCard = new subject(10); //Q = 12
				expect(testCard.get('numericValue')).to.equal(12);
				testCard = new subject(9); //J = 11
				expect(testCard.get('numericValue')).to.equal(11);
				testCard = new subject(8); //T = 10
				expect(testCard.get('numericValue')).to.equal(10);
			});

			it("returns the numeric value cards in higher suits", function() {
				testCard = new subject(25); //A = 14	
				expect(testCard.get('numericValue')).to.equal(14);				
			});

		});

		describe('suit', function() {
			it("returns the suit of the card", function() {
				testCard = new subject(12);
				expect(testCard.get('suit')).to.equal('s');
				testCard = new subject(25);
				expect(testCard.get('suit')).to.equal('h');
				testCard = new subject(38);
				expect(testCard.get('suit')).to.equal('d');
				testCard = new subject(51);
				expect(testCard.get('suit')).to.equal('c');
			});
		});
	});

	describe('Actions', function() {
		describe('toString', function() {
			it('returns a string representation of the card', function() {
				testCard = new subject(51);
				expect(testCard.toString()).to.equal(Poker.Spec.CARD_VALUES[51]);
			});
		});
	});

});

