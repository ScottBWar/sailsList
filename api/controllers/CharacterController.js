/**
 * CharacterController
 *
 * @description :: Server-side logic for managing characters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    index: function(req, res) {
        Character.find(function(err, characters) {
            if (err) {
              console.log(err);
              return res.send(err, 500);
            }
            res.view({
                charmodel: characters
            });
        });

    }
	
};

