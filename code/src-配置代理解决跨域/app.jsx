import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  state = {
    students: [],
    cars: [],
  }

  render() {
    const { students, cars } = this.state
    return (
      <div>
        <ul>
          {students.map(item => {
            return (
              <li key={item.id}>
                姓名：{item.name}，年龄:{item.age}
              </li>
            )
          })}
        </ul>
        <hr />
        <ul>
          {cars.map(item => {
            return (
              <li key={item.id}>
                姓名：{item.name}，年龄:{item.price}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://localhost:3000/path1/students').then(
      res => {
        this.setState({
          students: res.data,
        })
      },
      err => {
        console.log(err)
      }
    )
    axios.get('http://localhost:3000/path2/cars').then(
      res => {
        this.setState({
          cars: res.data,
        })
      },
      err => {
        console.log(err)
      }
    )
  }
}
