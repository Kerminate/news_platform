import React, { Component } from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import '../../css/mobile.css'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

export default class MobileIndex extends Component {
  render () {
    return (
      <div>
        <MobileHeader />
        <Tabs>
          <TabPane tab='头条' key='1' />
          <TabPane tab='社会' key='2' />
          <TabPane tab='国内' key='3' />
          <TabPane tab='国际' key='4' />
          <TabPane tab='娱乐' key='5' />
        </Tabs>
        <MobileFooter />
      </div>
    )
  }
}
