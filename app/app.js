var React = require("react");
var ReactDOM = require('react-dom');
var Main = require('./components/main');
// require React Router 
// var router = ('../routes/routes.js');

var routes = require('./config/routes.js');

ReactDOM.render(
	// <Router>{routes}</Router>,
	<Main/>,
	document.getElementById('app')
)