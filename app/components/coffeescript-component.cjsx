React = require 'react'

module.exports = React.createClass
	render: -> 
		<li>This is a React component defined using CoffeeScript and CJSX. <em class="nice">{this.props.nice}</em></li>;
