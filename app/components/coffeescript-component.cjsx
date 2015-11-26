React = require 'react'

module.exports = React.createClass
	render: ->
		<span>This is a React component in CoffeeScript and JSX. {this.props.nice}</span>;
