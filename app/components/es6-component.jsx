import React from 'react';

export default class ES6Component extends React.Component{
	constructor(props){
		super(props)
		this.state = {tool: 'ES6 and JSX'}
	}

	render(){
		return <li>This is a React component defined using {this.state.tool}. <em class="nice">{this.props.nice}</em></li>;
	}
}