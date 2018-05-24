import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import PCIndex from './js/components/pc_index'
import MobileIndex from './js/components/mobile_index'
import PCNewsDetails from './js/components/pc_news_details'
import MobileNewsDetails from './js/components/mobile_news_details'
import './App.css'
import MediaQuery from 'react-responsive'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MediaQuery query='(min-device-width: 1224px)'>
          <HashRouter>
            <div>
              <Route exact path='/' component={PCIndex}></Route>
              <Route exact path='/details/:uniquekey' component={PCNewsDetails}></Route>
            </div>
          </HashRouter>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <HashRouter>
            <div>
              <Route exact path='/' component={MobileIndex}></Route>
              <Route exact path='/details/:uniquekey' component={MobileNewsDetails}></Route>
            </div>
          </HashRouter>
        </MediaQuery>
      </div>
    )
  }
}

export default App
