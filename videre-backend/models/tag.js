var mongoose = require('mongoose');

/*
Tag is a seperate model instead of just an array of strings for future proofing (if tags should have more functionality)
 */

var TagSchema = new mongoose.Schema({
    name: String
});	

mongoose.model('Tag', TagSchema);