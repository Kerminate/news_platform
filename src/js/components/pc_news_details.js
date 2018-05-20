import React from 'react'
import { Row, Col } from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
export default class PCNewsDetails extends React.Component {
  constructor () {
    super()
    this.state = {
      newsItem: ''
    }
  }

  componentDidMount () {
    const myFetchOptions = {
      method: 'GET'
    }

    /* eslint-disable no-undef */
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=' +
      this.props.match.params.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({newsItem: json})
        document.title = this.state.newsItem.title + 'React News | React 驱动的新闻平台'
        console.log(this.state.newsItem.pagecontent)
      })
  }

  createMarkup () {
    return { __html: this.state.newsItem.pagecontent }
  }

  render () {
    return (
      <div>
        <PCHeader></PCHeader>
        <Row>
          <Col offset={2} span={14} className='container'>
            <div className='articleContainer' dangerouslySetInnerHTML={this.createMarkup()}></div>
          </Col>
          <Col span={6}></Col>
        </Row>
        <PCFooter></PCFooter>
      </div>
    )
  }
}
