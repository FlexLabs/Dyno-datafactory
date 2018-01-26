'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedQueueSchema = new Schema({
	guild:    { type: String, index: true },
	name:     { type: String },
	queue:    { type: Array, required: true },
	creator: { type: Object },
	createdAt: { type: Date, default: Date.now() },
});

module.exports = { name: 'SavedQueue', schema: savedQueueSchema };
