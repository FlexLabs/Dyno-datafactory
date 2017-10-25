'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guildPointsSchema = new Schema({
    guildId:     { type: String, required: true, index: true },
    userId:      { type: String, required: true, index: true },
    guild:       { type: Object, required: true },
    user:        { type: Object, required: true },
    points:      { type: Number, required: true },
});

module.exports = mongoose.model('GuildPoints', guildPointsSchema);
