import React, { Component } from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsContainer from './pc_news_container'
import '../../css/pc.css'

export default class PCIndex extends Component {
  render () {
    return (
      <div>
        <PCHeader />
        <PCNewsContainer />
        <PCFooter />
      </div>
    )
  }
}
