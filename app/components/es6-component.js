import React from 'react';

export default class ES6Component extends React.Component{
	render(){
		return <li>This is a React component in ES6 and JSX. {this.props.nice}</li>;
	}
}