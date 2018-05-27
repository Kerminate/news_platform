import React, { Component } from 'react'
import { Row, Col, Menu, Icon, Modal, Tabs, Form, Input, Button, message } from 'antd'
import { Link } from 'react-router-dom'
import 'whatwg-fetch'

// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup
const FormItem = Form.Item
const TabPane = Tabs.TabPane

class PCHeaderInit extends Component {
  constructor () {
    super()
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0
    }
  }

  componentWillMount () {
    if (window.localStorage.userid !== '') {
      this.setState({ hasLogined: true })
      this.setState({ userNickName: window.localStorage.userNickName, userid: window.localStorage.userid })
    }
  }

  setModalVisible (value) {
    this.setState({modalVisible: value})
  }

  handleClick (e) {
    if (e.key === 'register') {
      this.setState({current: 'register'})
      this.setModalVisible(true)
    } else {
      this.setState({current: e.key})
    }
  }

  handleSubmit (e) {
    // 页面开始向API进行提交数据
    e.preventDefault()
    const myFetchOptions = {
      method: 'GET'
    }
    const formData = this.props.form.getFieldsValue()
    console.log(formData)

    /* eslint-disable no-undef */
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=' + this.state.action +
      '&username=' + formData.userName +
      '&password=' + formData.password +
      '&r_userName=' + formData.r_userName +
      '&r_password=' + formData.r_password +
      '&r_confirmPassword=' + formData.r_confirmPassword, myFetchOptions)
      .then(response => response.json())
      .then((json) => {
        this.setState({ userNickName: json.NickUserName, userid: json.UserId })
        localStorage.userid = json.UserId
        localStorage.userNickName = json.NickUserName
      })

    if (this.state.action === 'login') {
      this.setState({ hasLogined: true })
    }
    message.success('请求成功！')
    this.setModalVisible(false)
  }

  callback (key) {
    if (key === 1) {
      this.setState({ action: 'login' })
    } else if (key === 2) {
      this.setState({ action: 'register' })
    }
  }

  logout () {
    window.localStorage.userid = ''
    window.localStorage.userNickName = ''
    this.setState({ hasLogined: false })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const userShow = this.state.hasLogined
      ? <Menu.Item key='logout' className='register'>
        <Button type='primary'>{this.state.userNickName}</Button>
          &nbsp;&nbsp;
        <Link to={`/usercenter`}>
          <Button type='dashed'>个人中心</Button>
        </Link>
          &nbsp;&nbsp;
        <Button type='ghost' onClick={this.logout.bind(this)}>退出</Button>
      </Menu.Item>
      : <Menu.Item key='register' className='register'>
        <Icon type='appstore' />注册/登录
      </Menu.Item>

    return (
      <header>
        <Row>
          <Col span={4} offset={2}>
            <a href='/' className='logo'>
              <img src={require('../../images/logo.png')} alt='logo' />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode='horizontal' onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
              <Menu.Item key='top'>
                <Icon type='appstore' />头条
              </Menu.Item>
              <Menu.Item key='shehui'>
                <Icon type='appstore' />社会
              </Menu.Item>
              <Menu.Item key='guonei'>
                <Icon type='appstore' />国内
              </Menu.Item>
              <Menu.Item key='guoji'>
                <Icon type='appstore' />国际
              </Menu.Item>
              <Menu.Item key='yule'>
                <Icon type='appstore' />娱乐
              </Menu.Item>
              <Menu.Item key='tiyu'>
                <Icon type='appstore' />体育
              </Menu.Item>
              <Menu.Item key='keji'>
                <Icon type='appstore' />科技
              </Menu.Item>
              <Menu.Item key='shishang'>
                <Icon type='appstore' />时尚
              </Menu.Item>
              {userShow}
            </Menu>
            <Modal title='用户中心' wrapClassName='vertical-center-modal' visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText='关闭'>
              <Tabs type='card' onChange={this.callback.bind(this)}>
                <TabPane tab='登录' key='1'>
                  <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label='账户'>
                      {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input sth.' }]
                      })(
                        <Input placeholder='请输入您的账号' />
                      )}
                    </FormItem>
                    <FormItem label='密码'>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input sth.' }]
                      })(
                        <Input type='password' placeholder='请输入您的密码' />
                      )}
                    </FormItem>
                    <Button type='primary' htmlType='submit'>登录</Button>
                  </Form>
                </TabPane>
                <TabPane tab='注册' key='2'>
                  <Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label='账户'>
                      {getFieldDecorator('r_userName', {
                        rules: [{ required: true, message: 'Please input sth.' }]
                      })(
                        <Input placeholder='请输入您的账号' />
                      )}
                    </FormItem>
                    <FormItem label='密码'>
                      {getFieldDecorator('r_password', {
                        rules: [{ required: true, message: 'Please input sth.' }]
                      })(
                        <Input type='password' placeholder='请输入您的密码' />
                      )}
                    </FormItem>
                    <FormItem label='确认密码'>
                      {getFieldDecorator('r_confirmPassword', {
                        rules: [{ required: true, message: 'Please input sth.' }]
                      })(
                        <Input type='password' placeholder='请再次输入您的密码' />
                      )}
                    </FormItem>
                    <Button type='primary' htmlType='submit'>注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>
          </Col>
        </Row>
      </header>
    )
  }
}

const PCHeader = Form.create({})(PCHeaderInit)
export default PCHeader
