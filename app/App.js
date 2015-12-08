import React from 'react'
import styles from 'style/App'
import 'style/sample'
import 'style/stylus'
import ES6Component from 'components/es6-component'
import CoffeeScriptComponent from 'components/coffeescript-component'
import ReactTemplateComponent from 'components/react-template-component'

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
          <p>Because it shouldn't be harder to start a React/Redux app than to write it!</p>
        </div>
        <div className='app'>
          <section className='examples column'>
          <h3>Examples</h3>
          <ul>
            <ES6Component nice='Nice.' />
            <CoffeeScriptComponent nice='Very nice.' />
            <ReactTemplateComponent nice='Weird but nice.' />
          </ul>
          </section>
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
            <li>SASS and SCSS</li>
            <li>Stylus</li>
            <li>Asset pipelining</li>
          </ul>
          </section>
        </div>
      </div>
    );
  }
}
