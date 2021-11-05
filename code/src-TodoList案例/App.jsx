import React, { Component } from 'react'

import './App.css'

import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: 1, content: '吃饭', done: false },
      { id: 2, content: '睡觉', done: false },
      { id: 3, content: '敲代码', done: false },
    ],
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List updateTodo={this.updateTodo} removeTodo={this.removeTodo} todos={this.state.todos} />
          <Footer todos={this.state.todos} changeAll={this.changeAll} clearAll={this.clearAll} />
        </div>
      </div>
    )
  }
  // 子传父用函数，通过props传递给子组件一个函数，子组件调用就可以传递数据给父组件
  // 用来增加todo的方法
  addTodo = payload => {
    const { todos } = this.state
    const newTodos = [payload, ...todos]
    this.setState({ todos: newTodos })
  }
  // 用来更新todo是否完成的方法
  updateTodo = id => {
    const { todos } = this.state
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done }
      } else {
        return item
      }
    })
    this.setState({ todos: newTodos })
  }
  // 用来删除指定todo的函数
  removeTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(item => {
      return item.id !== id
    })
    this.setState({ todos: newTodos })
  }
  // 用来响应footer组件全选或者取消全选的函数
  changeAll = checked => {
    const { todos } = this.state
    const newTodos = todos.map(item => {
      if (item.done !== checked) {
        item.done = !item.done
      }
      return item
    })
    this.setState({ todos: newTodos })
  }
  // 清除所有已完成事项的函数
  clearAll = () => {
    const { todos } = this.state
    const newTodos = todos.filter(item => {
      return item.done === false
    })
    if (todos.length - newTodos.length !== 0) {
      if (window.confirm('确定要删除所有已完成事项吗？')) {
        this.setState({ todos: newTodos })
      }
    }
  }
}
