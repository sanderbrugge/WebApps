var express = require('express');
let jwt = require('express-jwt');
var router = express.Router();

let mongoose = require('mongoose');
let Video = mongoose.model('Video');
let Tag = mongoose.model('Tag');
let auth = jwt({secret: process.env.VIDERE_SECRET, userProperty: 'payload'});

/*GET LIST OF VIDEOS */
router.get('/API/videos/', function(req, res, next) {
  Video.find(function(err, videos) {
    if (err) { return next(err); }
    res.json(videos);
  });
});

/**
 * GET TAGS
 */
router.get('/API/tags/', function(req, res, next){
  Tag.find(function(err, tags){
    if (err) {return next(err)}
    res.json(tags);
  });
});

/**
 * GET VIDEO by Id
 */
router.get('/API/video/:videoId', function(req, res, next) {
  res.json(req.video);
});


/*POST VIDEO */
router.post('/API/video/', auth, function (req, res, next) {
  let video = new Video(req.body);
  video.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});

/**
 * PUT increment likes for a video by id
 */
router.put('/API/video/:videoId', function(req, res, next){
  let newLikes = req.video.likes +1;
  let query = Video.findByIdAndUpdate(req.video._id,  { likes: +newLikes }, function(err, video) {
    if (err) throw err;
    res.send("succesfully updated: " + video._id);
  });
});

/**
 * add a tag to the video
 * this is as seen in the slides on forms (slide 29)
 * 
 * Do multiple POST requests to add a tag to a video.
 */
router.post('/API/video/:videoId/tags', auth, function(req, res, next) {
  let tag = new Tag(req.body);

  tag.save(function(err, tag) {
    if (err) return next(err);

    req.video.tags.push(tag);
    req.video.save(function(err, rec) {
      if (err) return next(err);
      res.json(tag);
    })
  });
});

/**
 * ROUTER PARAMS
 * 
 * find the video by ID for the requested method, send the retrieved video on to the next call with 'next'
 */
router.param('videoId', function(req, res, next, id) {
  let query = Video.findById(id);
  query.exec(function (err, video){
    if (err) { return next(err); }
    if (!video) { return next(new Error('not found ' + id)); }
    req.video = video;
    return next();
  });
});  


module.exports = router;