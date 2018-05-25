import React from 'react'
import { Row, Col, Form, Input, Card } from 'antd'

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

  handleSubmit () {

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
                  {getFieldDecorator('password', {})(
                    <Input type='textarea' placeholder='随便写' />
                  )}
                </FormItem>
                <Button type='primary' htmlType='submit'>提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )    
  }
} 

const CommonComments = Form.create({})(CommonCommentsInit)
export default CommonComments