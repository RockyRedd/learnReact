import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ListItem.css'

export default class ListItem extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    updateTodo: PropTypes.func.isRequired,
  }

  state = {
    mouse: false,
  }

  render() {
    // 从props中获取待办事项的id，内容与完成情况
    const { id, content, done } = this.props
    // state中的mouse属性记录鼠标是否移入
    const { mouse } = this.state
    return (
      // 处理鼠标移入移出事件，true代表移入，false代表移出,根据鼠标移入移出决定item背景颜色
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: mouse ? '#ddd' : '' }}>
        <label>
          <input type="checkbox" checked={done ? true : false} onChange={this.handleChange(id)} />
          <span>{content}</span>
        </label>
        {/* 根据鼠标移入移出决定删除按钮的显示与否 */}
        <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li>
    )
  }
  // 处理鼠标移入移出事件函数
  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  // 将改变状态的checkbox的id传递给根组件
  handleChange = id => {
    return () => {
      this.props.updateTodo(id)
    }
  }
  // 相应删除按钮点击事件函数
  handleDelete = id => {
    return () => {
      if (window.confirm('确定删除该待办事项吗？')) {
        this.props.removeTodo(id)
      }
    }
  }
}
