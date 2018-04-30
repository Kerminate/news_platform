import React, { Component } from 'react'
import { Row, Col, Carousel, Tabs } from 'antd'
import PCNewsBlock from './pc_newsblock'

const TabPane = Tabs.TabPane
export default class PCNewsContainer extends Component {
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
        <Row>
          <Col span={20} offset={2} className='container'>
            <div className='leftContainer'>
              <div className='carousel'>
                <Carousel {...settings}>
                  <div><img src={require('../../images/carousel_1.jpg')} alt='carousel_1' />></div>
                  <div><img src={require('../../images/carousel_2.jpg')} alt='carousel_2' />></div>
                  <div><img src={require('../../images/carousel_3.jpg')} alt='carousel_3' />></div>
                  <div><img src={require('../../images/carousel_4.jpg')} alt='carousel_4' />></div>
                </Carousel>
              </div>
            </div>
            <Tabs className='tabs_news'>
              <TabPane tab='头条新闻' key='1'>
                <PCNewsBlock count={22} type='top' width='100%' bordered='false' />
              </TabPane>
              <TabPane tab='国际' key='2'>
                <PCNewsBlock count={22} type='guoji' width='100%' bordered='false' />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}
