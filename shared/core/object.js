require('../poker');

//This is our core object. It includes validations and all of SC.Object. 
Poker.Object = Ember.Object.extend({

  // method to verify an object based on the "validations" property
  // validations expects an array, with each item containing an array of 3 strings:
  //    ['property','validation','message']
  //
  // ex: ['_cardValue','>= 0','internal card value must be greater than 0']
  validate: function(){
    var obj = this,
        validations = this.get('validations') || [];

    validations.forEach(function(v){
      //using eval until i figure out a better way to do this
      if( ! eval(obj.getPath(v[0])+' '+v[1]) ){
        throw Error(v[2]); 
      }
    });
    return this;
  }
});
