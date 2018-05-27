import React from 'react'
import { Row, Col, Tabs, Upload, Icon, Modal } from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

const TabPane = Tabs.TabPane
export default class PCUserCenter extends React.Component {
  constructor () {
    super()
    this.state = {
      previewImage: '',
      previewVisible: false
    }
  }

  render () {
    const props = {
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      listType: 'picture-card',
      defaultFileList: [
        {
          uid: -1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        }
      ],
      onPreview: (file) => {
        this.setState({ previewImage: file.url, previewVisible: true })
      }
    }

    return (
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col offset={2} span={20}>
            <Tabs>
              <TabPane tab='我的收藏列表' key='1'></TabPane>
              <TabPane tab='我的评论列表' key='2'></TabPane>
              <TabPane tab='头像设置' key='3'>
                <div className='clearfix'>
                  <Upload {...props}>
                    <Icon type='plus'></Icon>
                    <div className='ant-upload-text'>上传照片</div>
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img src={this.state.previewImage} alt='预览' />
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <PCFooter></PCFooter>
      </div>
    )
  }
}