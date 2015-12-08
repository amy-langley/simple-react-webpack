import React from 'react'
import myTemplate from 'react-template-component.rt'

module.exports = React.createClass({
	getInitialState: function(){
		return { tool: 'React Templates' };
	},
	render: myTemplate
});