import React from 'react';

export default class ES6Component extends React.Component{
	render(){
		return <li>This is a React component defined using ES6 and JSX. <em class="nice">{this.props.nice}</em></li>;
	}
}