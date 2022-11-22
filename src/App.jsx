import { useState } from 'react'
import './App.css'
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
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
        <input 
          type='search' 
          placeholder='enter monster name' 
          onChange={this.searchFunction} 
          className='SearchBox' 
        />

        <CardList monsters={filterdMonsters} />
        <SearchBox />
      </div>
    )
  }
}

export default App
