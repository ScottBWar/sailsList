/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },

  /**
   * CommentController.destroy()
   */
  destroy: function (req, res) {
    return res.json({
      todo: 'Not implemented yet!'
    });
  },

  all: function(req, res){
  	console.log("GOT HERE");
  	campaigns = Campaign.findAll().done(function(err, campaigns){
  		console.log("CAMPAIGNS" + campaigns);
  		res.view({
  			camps : campaigns
  		});
  	});

  }
};

