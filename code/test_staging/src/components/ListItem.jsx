import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListItem extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props
    return (
      <div className="card">
        <a href={data.html_url} target="_blank" rel="noreferrer">
          <img alt="avatar" src={data.avatar_url} style={{ width: '100px' }} /  >
        </a>
        <p className="card-text">{data.login}</p>
      </div>
    )
  }
}
