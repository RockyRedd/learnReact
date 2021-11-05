import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeAll: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
  }
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((prev, current) => {
      return prev + (current.done ? 1 : 0)
    }, 0)
    const totalCount = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === totalCount && totalCount !== 0 ? true : false} onChange={this.handleChange} />
          <span>{doneCount === totalCount && totalCount !== 0 ? '取消全选' : '全选'}</span>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button className="btn btn-danger" onClick={this.handleClick}>
          清除已完成任务
        </button>
      </div>
    )
  }
  // 响应全选按钮变化的响应函数
  handleChange = event => {
    this.props.changeAll(event.target.checked)
  }
  // 响应清除已完成按钮响应函数
  handleClick = () => {
    this.props.clearAll()
  }
}
