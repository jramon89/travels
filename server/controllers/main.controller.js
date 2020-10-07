const mongoose = require('mongoose');
const model = require('../config/travel.model');

const TravelController = {

    setTravel: function(req, res) {
        model.TravelModel.create(req.body, function(err, data) {
          if (!err) {
              res.send(data);
          }
      })
    },

    getTravels: function (req, res) {
        model.TravelModel.find({}, function (err, data) {
            if (!err) {
                res.send(data);
            }
        })
    }
}

module.exports = TravelController;