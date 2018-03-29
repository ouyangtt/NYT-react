// * **Saved** - displays one Saved Article that was searched and stored in the database
// require helpers file 
var helpers = require('../utils/helpers');
var React = require("react");

var SavedArticle = React.createClass({ 

	onClick: function(e) {
		console.log('changing');
		var value = e.target.value;
		var id = e.target.id;
			
		var updatedState = {};
		updatedState[id] = value;
		this.setState(updatedState);
		
		if(!valid) {
      	e.preventDefault();
    }
	},
	render:function() {
		console.log(this)
		return (
			<div>		
				<div className="col-md-8">
					<div>{this.props.name}</div>
					<div>{this.props.date}</div>				
					<div>{this.props.url}</div>
				</div>
				<form method="POST" action={"/api/"+this.props.identifier+"?_method=DELETE"} >
					<div className="col-md-4">
						<button onClick>Delete</button>
					</div>
				</form>
			</div>
		)
	} 

});

module.exports = SavedArticle;