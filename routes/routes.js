 //  Make sure you put this after all other GET routes
var Article = require ('../models/article-schema');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var methodOverride = require("method-override");

// // * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
router.get('/api/saved', function (request, response){
	Article.find({}).then(function (results){
		response.json(results);

	});
});

//  * `/api/saved` (post) - your components will use this to save an article to the database
router.post('/api/saved', function(request, response){
	console.log(request.body);
	var newArticle = new Article(request.body);

	newArticle.save(function(err, doc) {
		if(err) throw err; 
		response.send(doc);
	});

});

//  * `/api/saved` (delete) - to delete one article based on its unique id

router.delete('/api/:id', function(req, res) {
	Article.find({ _id : req.params.id})
	.remove()
	.then(function () {
		console.log('here');
		res.json({
			
		});
	});
	
});

//  * `*` (get) - will load your single HTML page (with ReactJS) in public/index.html.
router.get('*', function (req, res){
	res.sendFile(__dirname + "/public/index.html");
});

module.exports = router;