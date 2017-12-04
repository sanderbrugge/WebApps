var mongoose = require('mongoose');

/**
 * as seen in the slides (auth)
 * a user needs a username which has to be unique!
 * we hash the pw, but that's not enough, we also have to salt the pw!
 */

let UserSchema = new mongoose.Schema({
	username: { type: String, lowercase: true, 
		unique: true },
	hash: String,
	salt: String
});


/**
 * pbkdf2 together with sha512 is considered good _right now_
 */
UserSchema.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(32).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 
	  10000, 64, 'sha512').toString('hex');
}

/**
 * check if the pw is a valid pw
 */
UserSchema.methods.validPassword = function (password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 
	  10000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

/**
 * JWT = jason web token, typically base64 encoded (because of localstorage)
 */
UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, process.env.VIDERE_SECRET);
};

mongoose.model('User', UserSchema);
