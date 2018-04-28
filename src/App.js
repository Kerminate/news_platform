import React, { Component } from 'react'
import PCIndex from './js/components/pc_index'
import MobileIndex from './js/components/mobile_index'
import './App.css'
import MediaQuery from 'react-responsive'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCIndex />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex />
        </MediaQuery>
      </div>
    )
  }
}

export default App
