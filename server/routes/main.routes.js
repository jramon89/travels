const express = require('express');
const controllers = require('../controllers/main.controller');
const router = express.Router();


router.route('/travels')
    .get(controllers.getTravels)
    .post(controllers.setTravel);

module.exports = router;