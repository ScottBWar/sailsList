/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id:{
      type:'INTEGER',
      primaryKey:'true'
    },

  	name:{
  		type:'STRING',
      defaultsTo:'thisnewuser'
  	},

  	password:{
  		type:'STRING',
  		defaultsTo:'password'
  	},

  	characters:{
  		collection: 'character',
      via:"user"
  	},

  	campaigns:{
  		collection: 'campaign',
      via:"user"
  	}

  }
};

