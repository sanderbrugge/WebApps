var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Video = mongoose.model('Video');
let Tag = mongoose.model('Tag');


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


/*POST VIDEO */
router.post('/API/video/', function (req, res, next) {
  let video = new Video(req.body);
  video.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});

/**
 * add a tag to the video
 * this is as seen in the slides on forms (slide 29)
 * 
 * Do multiple POST requests to add a tag to a video.
 */
router.post('/API/video/:videoId/tags', function(req, res, next) {
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
 * find the video by ID for the post method
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