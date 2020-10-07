const mongoose = require('mongoose'),
    travelSchema = mongoose.Schema({
        addressStart: String,
        addressEnd: String,
        transport: String,
        kilometers: Number,
        workers: Object,
        isRoundTrip: Boolean,
        factorCO2: String,
        calculoCO2: String
    });

const TravelModel = mongoose.model('travel', travelSchema);
const TravelData = {
    addressStart: 'Test',
    addressEnd: 'Test',
    transport: 'Test',
    kilometers: 123,
    workers: {
        workername_1: 'Test',
        workername_2: 'Test',
    },
    isRoundTrip: false,
    factorCO2: '0,00',
    calculoCO2: '0'
};

module.exports = {
    TravelModel,
    TravelData
}