'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modLogSchema = new Schema({
	id:        { type: Number, index: true },
    guild:     { type: String, index: true },
    userid:    { type: String },
    user:      { type: Object, required: true },
    notes:     { type: Array, required: true, default: [] },
    createdAt: { type: Date, default: Date.now(), index: true },
}, { strict: false });

module.exports = { name: 'Note', schema: modLogSchema }