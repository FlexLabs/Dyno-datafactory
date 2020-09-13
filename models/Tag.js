'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
	guild:       { type: String, required: true, index: true },
	author:      { type: Object, required: true },
	tag:         { type: String },
	category:    { type: String },
	content:     { type: String },
	usage: 		 { type: Number, default: 0 },
	createdAt:   { type: Date, default: Date.now },
}, { strict: false });

module.exports = { name: 'Tag', schema: tagSchema }
