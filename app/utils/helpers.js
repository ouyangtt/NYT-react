// hit NYT API with helper functions
var axios = require('axios');
var NYT_API_KEY = 'bc26893fc2a24a038f860dc78a4919e8';

var helpers = {

	runQuery: function(term, start, end) {
		var params = {
			// 'api-key': NYT_API_KEY,
			'term': term,
			'start': start,
			'end': end
		};

		// Based on the queryTerm we will create a queryURL 
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + NYT_API_KEY + "&q=" + term;// + "&begin_date=" + start + "&end_date=" + end;
		console.log(queryURLBase);
		return axios.get(queryURLBase, params)
			.then(function (response) {
			    // console.log(response);
			    return response.data.response.docs;
			 })
			.catch(function (error) {

				console.log(error);
				return[];
			});
	},



	getSaved: function() {

		return axios.get('/api/saved').then( function (results){
			console.log(results);
			return results.data;
		});
		
	},

	postSaved: function(title, date, url) {
		var newArticle = { title: title, date: date, url: url };

		return axios.post('/api/saved', newArticle)
					.then(function(results) {
						return results.data;
					});
	}
	//postSaved, and deleteSaved functions

};

module.exports = helpers;