import React, { Component } from 'react';
import { Tabs, TabItem } from './components'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <TabItem name="firstTab">
            lkdfjklsdjf
            <Tabs direction="horizontal">
              <TabItem name="firstRow">
                Cell 1
              </TabItem>
              <TabItem name="firstRow">
                Cell 2
              </TabItem>
              <TabItem name="firstRow">
                Cell 2
              </TabItem>
            </Tabs>
          </TabItem>
           <TabItem name="secondTab"e>
            2nd tab content
          </TabItem>
           <TabItem name="thirdTab">
            3rd tab content
          </TabItem>
        </Tabs>
      </div>
    );
  }
}

export default App;
