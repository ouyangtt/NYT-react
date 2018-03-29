var React = require("react");
var helpers = require('../utils/helpers');
var axios = require('axios');

var Result = React.createClass({ 
	getInitialState: function() {
		return {
			title: "",
			date: "",
			url: ""
		}
	},
	componentDidMount: function() {
		this.setState({
			title: this.props.name,
			date: this.props.date,
			url: this.props.url			
		})
	},
	onClick: function(e) {
	
		this.props.savedQuery(this.state);

		// helpers.postSaved(this.state.title, this.state.url, this.state.date).then(function(data) {
		// 	console.log(data);

		// });
	
		// var newArticle = { title:};

		// axios
		// 	.post('/api/saved', newArticle)
		// 	.then(function(results) {
		// 		console.log(results);
		// 	})
		// 	.catch(function (error) {
  //   			console.log(error);
  // 			}.bind(this));
		
	},
	render:function() {					
		return (
			<div>
				<div>{this.props.name}</div>
				<div>{this.props.date}</div>				
				<div>{this.props.url}</div>
				<button onClick={this.onClick}>Save</button>			
			</div>
		)
	} 
});

module.exports = Result;


