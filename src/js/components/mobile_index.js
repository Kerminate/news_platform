import React, { Component } from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import MobileList from './mobile_list'
import MobileListPullRefresh from './mobile_list_pull_refresh'
import '../../css/mobile.css'
import { Tabs, Carousel } from 'antd'
const TabPane = Tabs.TabPane

export default class MobileIndex extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      autoplay: true
    }

    return (
      <div>
        <MobileHeader />
        <Tabs>
          <TabPane tab='头条' key='1'>
            <div className='carousel'>
              <Carousel {...settings}>
                <div><img src={require('../../images/carousel_1.jpg')} alt='carousel_1' />></div>
                <div><img src={require('../../images/carousel_2.jpg')} alt='carousel_2' />></div>
                <div><img src={require('../../images/carousel_3.jpg')} alt='carousel_3' />></div>
                <div><img src={require('../../images/carousel_4.jpg')} alt='carousel_4' />></div>
              </Carousel>
            </div>
            <MobileList count={20} type='top'></MobileList>
          </TabPane>
          <TabPane tab='社会' key='2'>
            <MobileList count={20} type='shehui'></MobileList>          
          </TabPane>
          <TabPane tab='国内' key='3'>
            <MobileListPullRefresh count={20} type='guonei'></MobileListPullRefresh>
          </TabPane>
          <TabPane tab='国际' key='4'>
            <MobileList count={20} type='guoji'></MobileList>
          </TabPane>
          <TabPane tab='娱乐' key='5'>
            <MobileList count={20} type='yule'></MobileList>
          </TabPane>
        </Tabs>
        <MobileFooter />
      </div>
    )
  }
}
