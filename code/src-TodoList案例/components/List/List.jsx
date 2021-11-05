import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './List.css'

import ListItem from '../ListItem/ListItem'

export default class List extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  }

  render() {
    // 将根组件传递来的props继续传递给子组件
    const { todos, updateTodo, removeTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map(item => (
          <ListItem updateTodo={updateTodo} removeTodo={removeTodo} key={item.id} {...item} />
        ))}
      </ul>
    )
  }
}
