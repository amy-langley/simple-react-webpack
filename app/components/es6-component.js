import React from 'react';

export default class ES6Component extends React.Component{
	render(){
		return <span>This is a React component in ES6 and JSX. {this.props.nice}</span>;
	}
}