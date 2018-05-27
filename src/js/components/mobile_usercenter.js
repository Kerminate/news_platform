import React from 'react'
import { Row, Col, Tabs } from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

const TabPane = Tabs.TabPane
export default class PCUserCenter extends React.Component {
  render () {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab='我的收藏列表' key='1'></TabPane>
              <TabPane tab='我的评论列表' key='2'></TabPane>
              <TabPane tab='头像设置' key='3'></TabPane>
            </Tabs>
          </Col>
        </Row>
        <MobileFooter></MobileFooter>
      </div>
    )
  }
}