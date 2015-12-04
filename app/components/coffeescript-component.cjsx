React = require 'react'

module.exports = React.createClass
	render: -> 
		<li>This is a React component in CoffeeScript and JSX. <em class="nice">{this.props.nice}</em></li>;
