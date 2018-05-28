import React from 'react'
import { Row, Col, Tabs, Card } from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

const TabPane = Tabs.TabPane
export default class PCUserCenter extends React.Component {
  constructor() {
    super()
    this.state = {
      usercollection: '',
      previewImage: '',
      previewVisible: false
    }
  }

  componentDidMount() {
    const myFetchOptions = {
      method: 'GET'
    }

    /* eslint-disable no-undef */
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userid, myFetchOptions)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          usercollection: json
        })
      })
  }

  render () {
    const { usercollection } = this.state
    const usercollectionList = usercollection.length ?
      usercollection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a target='_blank' href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>{ uc.Title }</p>
        </Card>
      ))
      : '您还没有收藏任何的新闻，快去收藏一些新闻吧。'

    return (
      <div>
        <MobileHeader></MobileHeader>
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab='我的收藏列表' key='1'>
                <Row>
                  <Col span={24}>
                    { usercollectionList }
                  </Col>
                </Row>
              </TabPane>
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