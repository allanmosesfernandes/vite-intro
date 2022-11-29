import { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import React, { Component } from 'react'




const App = () => {

  const [searchString, setSearchString] = useState('');//declaring Inital State for search field
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //==Fetching Data from API==//
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => setMonsters(monsters));
  }, [])
  

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchString);
  })
  setFilteredMonsters(newfilteredMonsters);
  }, [monsters,searchString])


  const onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();
  setSearchString(searchField);
  }

  return (
    <div>
    <SearchBox 
    placeholder="Enter monster name"
    classname="search-box"
    onchangeHandler={onSearchChange}
    />
    <CardList monsters={filteredMonsters} />
    </div>

  )
}

export default App
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((data) => this.setState(() => {
  //     return {monsters:data}
  //   }))
  // }