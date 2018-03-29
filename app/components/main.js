 // * **Main** - main-container div that holds the main layout and navigation. 

var helpers = require('../utils/helpers');
var React = require('react');
var Results = require('./results');
// var SavedArticle = require('./saved-article');	
var Search = require('./search');
var SavedArticles = require('./saved-articles');

var Main = React.createClass({
	getInitialState: function() {
		this.getSaved();
    	return {
    		results: [], 
    		saved: []
    	};	
  	},
  	getSaved: function(state){
  		// run getsaved function on helpers set state on main like in savedquery 
		helpers.getSaved().then(function(data){
		console.log(data);
		this.setState({
			saved: this.state.saved.concat(data)
			});
		}.bind(this));
  	},

	getQuery: function(term, start, end){
		return helpers.runQuery(term, start, end).then(function(result){
			console.log(result);
			this.setState({results: result});
		}.bind(this));
	},

	savedQuery: function(state){
		helpers.postSaved(state.title, state.date, state.url).then(function(result){
			console.log(result);
			this.setState({
				saved: this.state.saved.concat([result])
			});
		}.bind(this));
	},
	render: function() {

		return (
			<div> 
				<div className="jumbotron">
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times React Search</strong></h1>
				</div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container">
				    	<ul>
				    		<li> <a href="#/main">Main</a></li>
				    		<li> <a href="#/search">Search</a></li>
							<li> <a href="#/saved">Saved</a></li>
						</ul>
				  </div>
				</nav>		
				<Search getQuery={this.getQuery}></Search>
				<Results results={this.state.results} savedQuery={this.savedQuery}></Results>
				<SavedArticles saved={this.state.saved}></SavedArticles>

			
			</div>
			 
		)
	}

});

module.exports = Main;