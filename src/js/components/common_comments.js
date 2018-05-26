import React from 'react'
import { Row, Col, Form, Input, Card, Button, notification } from 'antd'

const FormItem = Form.Item

class CommonCommentsInit extends React.Component {
  constructor () {
    super()
    this.state = {
      comments: ''
    }
  }

  componentDidMount () {
    const myFetchOptions = {
      method: 'GET'
    }

    /* eslint-disable no-undef */
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=' +
      this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => this.setState({
        comments: json
      }))
  }

  handleSubmit (e) {
    e.preventDefault()
    const formData = this.props.form.getFieldsValue()
    const myFetchOptions = {
      method: 'GET'
    }

    /* eslint-disable no-undef */
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=' + localStorage.userid +
        '&uniquekey=' + this.props.uniquekey +
        '&comment=' + formData.remark, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.componentDidMount()
      })
  }

  addUserCollection () {
    const myFetchOptions = {
      method: 'GET'
    }

    /* eslint-disable no-undef */
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=' + localStorage.userid +
      '&uniquekey=' + this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        //收藏成功以后进行一下全局的提醒
        notification['success']({ message: 'ReactNews提醒', description: '收藏此文章成功' })
      })
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { comments } = this.state
    const commentList = comments.length ?
      comments.map((comment, index) => (
        <Card key={index} title={comment.Username} extra={<a href='#'>发布于 {comment.dateTime}</a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      : '没有加载到任何评论'

    return (
      <div className='comment'>
        <Row>
          <Col span={24}>
            { commentList }
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label='您的评论'>
                  {getFieldDecorator('remark', { initialValue: '' })(
                    <Input type='textarea' placeholder='随便写' />
                  )}
                </FormItem>
                <Button type='primary' htmlType='submit'>提交评论</Button>
                &nbsp;&nbsp;
                <Button type='primary' htmlType='button' onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>                
            </Form>
          </Col>
        </Row>
      </div>
    )    
  }
} 

const CommonComments = Form.create({})(CommonCommentsInit)
export default CommonComments