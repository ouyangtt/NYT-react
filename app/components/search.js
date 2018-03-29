 // * **Search** - queries the NYT API for articles. Displays API search results from another **Query** component 
 // **Results** component. Gives the user the ability to save an article to their Saved Articles.
// require helpers file 
var React = require("react");
var helpers = require('../utils/helpers.js');

var Search = React.createClass({ 
	getInitialState: function() {
		return {
			term: '',
			start: '',
			end: ''		
		};
	},
	onSubmit: function(e) {
		e.preventDefault()
		console.log(e)
		this.props.getQuery(this.state.term, this.state.start, this.state.end)
	},
	onChange: function(e) {
		console.log('changing');
		var value = e.target.value;
		var id = e.target.id;
			
		var updatedState = {};
		updatedState[id] = value;
		this.setState(updatedState);
	},
	render:function() {		
		return (
	 	<div>
	 		<form onSubmit={this.onSubmit}>
		 		<input type="text" id="term" value={this.state.term} onChange={this.onChange}/>
		 		<input type="text" id="start" value={this.state.startDate} onChange={this.onChange}/> 
		 		<input type="text" id="end" value={this.state.endDate} onChange={this.onChange}/> 
		 		<button>Submit</button>
	 		</form>
	 	</div>
		)
	}
});

module.exports = Search;