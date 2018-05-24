import React from 'react'
import { Row, Col, BackTop } from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

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
      <div id ='mobileDetailsContainer'>
        <MobileHeader></MobileHeader>
        <div className='ucmobileList'>
          <Row>
            <Col span={24} className='container'>
              <div className='articleContainer' dangerouslySetInnerHTML={this.createMarkup()}></div>
            </Col>
          </Row>
          <MobileFooter></MobileFooter>
          <BackTop />
        </div>
      </div>
    )
  }
}
