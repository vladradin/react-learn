import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import SideMenu from './Components/SideMenu';
import MainContent from './Components/MainContent';
import FooterInfo from './Components/FooterInfo';

import { Provider } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.store);
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div className="container MainArea">
            <Navbar />
            <div className="row MainArea">
              <SideMenu className="col-3" />
              <MainContent className="col-9" />
            </div>
            <FooterInfo />
          </div>
        </BrowserRouter>
      </Provider >
    );
  }
}

export default App;
