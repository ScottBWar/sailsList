/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id:{
      type:'integer',
      primaryKey:'true'
    },

  	name:{
  		type:'string',
      defaultsTo:'thisnewuser'
  	},

  	password:{
  		type:'string',
  		defaultsTo:'password'
  	},

  	characters:{
  		collection: 'Character',
  		defaultsTo:[{'name':'chumbo','class':'fighter'}]
  	},

  	campaigns:{
  		collection: 'Campaign',
  		defaultsTo:[{'title':'Adams Wrath'}]
  	}

  }
};

