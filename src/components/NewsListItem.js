import React, { Component } from 'react'

export default class NewListItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.feed}</p>
      </div>
    )
  }
}
