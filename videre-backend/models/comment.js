var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    user: String,
    comment: String,
    subcomments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    date: Date
});	

mongoose.model('Comment', CommentSchema);