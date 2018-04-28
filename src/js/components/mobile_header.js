import React, { Component } from 'react'
import { Row, Col } from 'antd'
import logo from '../../images/logo.png'

// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

export default class PCHeader extends Component {
  constructor () {
    super()
    this.state = {
      current: 'top'
    }
  }
  render () {
    return (
      <div id='mobileHeader'>
        <header>
          <Row>
            <Col span={4} offset={2}>
              <a href='/' className='logo'>
                <img src={logo} alt='logo' />
                <span>ReactNews</span>
              </a>
            </Col>
          </Row>
        </header>
      </div>
    )
  }
}
