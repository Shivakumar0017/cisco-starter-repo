import './App.css';
import React, { Component } from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import DisplayAddress from './DisplayAddress';
import PylonConnector from './PylonConnector';

class App extends Component {
  render() {
      return (
          <div className="App">
               <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <DisplayAddress url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <DisplayAddress url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Pylon Packet Latency">
                    <PylonConnector />
                </Exhibit>
          </div>
      );
  }
}

export default App;
