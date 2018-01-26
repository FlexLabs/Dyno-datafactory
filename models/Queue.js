'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueItemSchema = new Schema({
	video_id:      { type: String, required: true },
	title:         { type: String },
	description:   { type: String },
	thumbnail_url: { type: String },
	url:           { type: String },
	length:        { type: Number },
	user:          { type: Object },
	v:             { type: Number },
});

const queueSchema = new Schema({
	guild:    { type: String, index: true },
	name:     { type: String },
	queue:    [queueItemSchema],
});

module.exports = { name: 'Queue', schema: queueSchema }
