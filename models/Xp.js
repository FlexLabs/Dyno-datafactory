'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const xpSchema = new Schema({
    userId:      { type: String, required: true, index: true },
    user:        { type: Object, required: true },
    xp:          { type: Number, required: true },
    level:       { type: Number, required: true }
});

module.exports = mongoose.model('Xp', xpSchema);
