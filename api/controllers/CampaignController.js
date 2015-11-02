/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    index: function(req, res) {
        Campaign.find(function(err, campaigns) {
            if (err) {
              console.log(err);
              return res.send(err, 500);
            }
            res.view({
                model: campaigns
            });
        });

    }
};