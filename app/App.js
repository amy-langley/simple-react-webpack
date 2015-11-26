import React from 'react'
import styles from 'style/App.css'
import 'style/sample.scss'
import ES6Component from 'components/es6-component'
//CoffeeScriptComponent = require('./components/coffescript-component')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className='app'>
        <h1>simple-react-webpack</h1>
        <p>This is sample text. Styled with SCSS and CSS! :3</p>
        <ES6Component nice='Nice.' />
      </div>
    );
  }
}
