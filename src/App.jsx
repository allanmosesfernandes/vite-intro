import { useState } from 'react'
import './App.css'

import React, { Component } from 'react'

export class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Allan',
      monsters: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => this.setState(() => {
      return {monsters:data}
    }))
  }

  searchFunction = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    console.log(searchText);
    this.setState(() => {
      return {searchText:searchText}
    })
  }

  render() {
    const filterdMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchText)
    })
    return (
      <div>
        <input type='search' placeholder='enter monster name' onChange={this.searchFunction} className='search-box' />
          {
            filterdMonsters.map((monster, index) => {
              return <h1 key={index}>{monster.name}</h1>
            })
          }
      </div>
    )
  }
}

export default App
