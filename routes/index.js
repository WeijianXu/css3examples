
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};
exports.chapter = function(req, res){
  console.log(req.originalUrl);
  res.render('.' + req.originalUrl);
};
exports.climb = function(req, res){
  console.log(req.originalUrl);
  res.render('.' + req.originalUrl);
};
exports.roma = function(req, res){
  console.log(req.originalUrl);
  res.render('.' + req.originalUrl);
};
exports.harmonise = function(req, res){
  console.log(req.originalUrl);
  res.render('.' + req.originalUrl);
};
exports.test = function(req, res){
  console.log(req.originalUrl);
  res.render('.' + req.originalUrl);
};