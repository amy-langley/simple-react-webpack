React = require 'react'

module.exports = React.createClass
	getInitialState: ->
		tool: 'CoffeeScript and CJSX'
	render: -> 
		<li>This is a React component defined using {this.state.tool}. <em class="nice">{this.props.nice}</em></li>;
