import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

export default class List extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    isFirst: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    err: PropTypes.string.isRequired,
  }

  render() {
    const { users, isFirst, isLoading, err } = this.props
    return (
      <div className="row">
        {isFirst ? (
          <h2>请输入关键字搜索用户</h2>
        ) : isLoading ? (
          <h2>正在搜索。。。。。</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : (
          users.map(item => {
            return <ListItem data={item} key={item.id} />
          })
        )}
      </div>
    )
  }
}
