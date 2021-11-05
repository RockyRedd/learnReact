import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class Search extends Component {
  static propTypes = {
    updateState: PropTypes.func.isRequired,
  }

  searched = React.createRef()

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={this.searched} onKeyUp={this.isEnter} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
  // 响应用户点击搜索按钮事件
  search = () => {
    // 开始搜索，更新状态，isFirst设为false，isLoading设为true
    this.props.updateState({ isFirst: false, isLoading: true })
    // 获取用户的输入
    // 连续解构赋值加改名
    const {
      searched: {
        current: { value: keyword },
      },
    } = this
    // 发送ajax请求,/to5000为前缀，表示走代理发给5000端口服务器
    axios.get(`http://localhost:3000/to5000/search/users?q=${keyword}`).then(
      res => {
        // 请求成功
        // 获取所需的数据，并填装入一个数组
        const users = res.data.items.map(item => {
          const { login, avatar_url, html_url, id } = item
          return { login, avatar_url, html_url, id }
        })
        // 更新状态，将users数组发送给父组件,并将isloading设为false
        this.props.updateState({ users, isLoading: false })
      },
      err => {
        // 请求失败，更新状态，保存错误信息error,并将isloading设为false
        this.props.updateState({ err: err.message, isLoading: false })
      }
    )
  }
  // 响应用户按下回车键事件
  isEnter = event => {
    // 若用户按下的不是回车键，return
    if (event.key !== 'Enter') return
    // 用户按下的是回车键，开始发送请求
    this.search()
  }
}
