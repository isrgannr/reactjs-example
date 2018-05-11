import React, { Component } from 'react'
import NewsListItem from './NewsListItem'

export default class NewsList extends Component {
 
  render() {

    const news = this.props.news.map(item => {
      return <NewsListItem key={item.id} title={item.title} feed={item.feed} />
    })

    return <div>{news}</div>
  }
}
