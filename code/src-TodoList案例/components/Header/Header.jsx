import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import './Header.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.sendTodo} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
  // 相应回车键按下事件函数，将数据传递给父组件
  sendTodo = event => {
    // 如果按下的不是回车键，return
    if (event.key !== 'Enter') return
    // 若输入的是空格或者没有输入，则清空输入框value并return
    if (event.target.value.trim() === '') {
      event.target.value = ''
      return
    }
    // 准备好要传给父组件的todo对象
    const obj = { id: nanoid(), content: event.target.value, done: false }
    // 清空input输入框的值
    event.target.value = ''
    // 调用父组件传过来的props函数，将todo对象传递给父组件
    this.props.addTodo(obj)
  }
}
