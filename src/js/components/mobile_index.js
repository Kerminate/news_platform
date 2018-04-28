import React, { Component } from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import '../../css/mobile.css'

export default class MobileIndex extends Component {
  render () {
    return (
      <div>
        <MobileHeader />
        <MobileFooter />
      </div>
    )
  }
}
