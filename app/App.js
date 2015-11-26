import React from 'react';
import styles from './style/App.css';
import './style/sample.scss';

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
      </div>
    );
  }
}
