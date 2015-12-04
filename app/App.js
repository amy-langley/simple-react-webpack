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
          <section className='features column'>
          <h3>Features</h3>
          <ul>
            <li>React</li>
            <li>React Templates</li>
            <li>react-router</li>
            <li>react-redux</li>
            <li>React Hot Reloader</li>
            <li>Redux</li>
            <li>Redux Dev Tools</li>
            <li>Redux Hot Reloader</li>
            <li>Babel ES6 and JSX</li>
            <li>CoffeeScript and CJSX</li>
            <li>Immutable.js</li>
            <li>SASS (SCSS)</li>
          </ul>
          </section>
          <section className='examples column'>
          <h3>Examples</h3>
          <ul>
            <ES6Component nice='Nice.' />
            <CoffeeScriptComponent nice='Very nice.' />
          </ul>
          </section>
        </div>
      </div>
    );
  }
}
