/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // create: function (req, res) {
    //    return res.json({
    //      todo: 'Not implemented yet!'
    //    });
    //  },


    //  destroy: function (req, res) {
    //    return res.json({
    //      todo: 'Not implemented yet!'
    //    });
    //  },

    index: function(req, res) {
        console.log("GOT HERE");
        Campaign.find(function(err, campaigns) {
            if (err) {
              console.log(err);
              return res.send(err, 500);
            }

            console.log("CAMPAIGNS" + campaigns);
            res.view({
                model: campaigns
            });
        });

    }
};