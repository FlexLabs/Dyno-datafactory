'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditsSchema = new Schema({
    userId:      { type: String, required: true, index: true },
    user:        { type: Object, required: true },
    credits:     { type: Number, required: true }
});

module.exports = mongoose.model('Credits', creditsSchema);
