var mongoose = require('mongoose');

/*
SchemaTypes:

String.
Number.
Date.
Buffer.
Boolean.
Mixed.
Objectid.
Array.
 */

var VideoSchema = new mongoose.Schema({
    views: Number,
    title: String,
    likes: Number,
    description: String,
    thumbnail: String,
    video: String,
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});	

mongoose.model('Video', VideoSchema);