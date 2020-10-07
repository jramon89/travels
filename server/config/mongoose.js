const mongoose = require('mongoose'),
    config = require('./config'),
    model = require('./travel.model');

exports.connect = function() {

    mongoose.connect(config.pathdb,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, function(err) {
        if (err) {
            console.log('Error traying to connect to database: '+ config.pathdb);
        } else {
            console.log('DB runing on', config.pathdb);
        }
    });

    model.TravelModel
        .find()
        .countDocuments()
        .then(function(size) {
            if (size > 0) {
                return;
            }
            model.TravelModel
                .create(model.TravelData, function () {
                })
        })

};





