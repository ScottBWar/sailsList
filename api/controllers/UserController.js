/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	 index: function(req, res) {
        User.find(function(err, users) {
            if (err) {
              console.log(err);
              return res.send(err, 500);
            }
            res.view({
                usermodel: users
            });
        });

    }
	
};

