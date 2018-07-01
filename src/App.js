import React, { Component } from 'react';

import './App.css';
import 'antd/dist/antd.css';
import ModalOne from './container/ModalOne';
import ModalTwo from './container/ModalTwo';
// import ModalRoot from './components/ModalRoot';
class App extends Component {
  

  render() {
    return (
      <div className="App">
          <ModalOne />
          <ModalTwo />
          {/* <ModalRoot/> */}
      </div>
    );
  }
}

export default App;
