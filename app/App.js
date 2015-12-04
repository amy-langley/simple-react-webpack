import React from 'react'
import styles from 'style/App.css'
import 'style/sample.scss'
import ES6Component from 'components/es6-component'
import CoffeeScriptComponent from 'components/coffeescript-component'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <div className='ticker'>
          <h1>simple-react-webpack</h1>
          <p>This is sample text. Styled with SCSS and CSS! :3</p>
        </div>
        <div className='app'>
          <ES6Component nice='Nice.' />
          <CoffeeScriptComponent nice='Very nice.' />
        </div>
      </div>
    );
  }
}
