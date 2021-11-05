import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

import './App.css'

export default class App extends Component {
  state = {
    // 存放所有用户信息的数组
    users: [],
    // 页面是否为第一次渲染
    isFirst: true,
    // 页面是否正在loading
    isLoading: false,
    // 请求出错的信息
    err: '',
  }

  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
  // 更新状态的函数
  updateState = state => {
    this.setState(state)
  }
}
