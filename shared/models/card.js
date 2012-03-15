require('../core/object');

Poker.Card = function(cardNumber) {
	return Poker.Object.create({

		//----Static Properties
		_cardNumber: cardNumber,

		validations: function() {
			return [['_cardNumber', '>= 0', 'Card is not in the 52 card deck'], ['_cardNumber', '<= 51', 'Card is not in the 52 card deck']];
		}.property(),

		//----Computed Properties
		//returns the number or letter of the card
		faceValue: function() {
			var numericValue = this.get('numericValue'),
			faceCards = ['T', 'J', 'Q', 'K', 'A'];

			return faceCards[numericValue - 10] || numericValue.toString();
		}.property('numericValue'),

		//return only a number for the card
		// J = 11, Q = 12, K = 13, A = 14
		numericValue: function() {
			var cardNumber = this.get('_cardNumber');
			return (cardNumber % 13) + 2;
		}.property('_cardNumber'),

		//return the suit for the card as a letter (s, h, d, c)
		suit: function() {
			var cardNumber = this.get('_cardNumber'),
			suits = ['s', 'h', 'd', 'c'];

			return suits[Math.floor(cardNumber / 13)];
		}.property('_cardNumber'),

		//----Actions
		//return a human readable (short) string representation (ie '4d')
		toString: function() {
			return this.get('faceValue') + this.get('suit');
		}
	}).validate();
};

