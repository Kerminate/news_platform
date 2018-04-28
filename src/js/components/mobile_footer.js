import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class MobileFooter extends Component {
  render () {
    return (
      <footer>
        <Row>
          <Col span={20} offset={2} className='footer'>
            &copy;&nbsp;2018 ReactNews. All Rights Reserved.
          </Col>
        </Row>
      </footer>
    )
  }
}
