import { useEffect, useState } from 'react'
import './App.css'
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import React, { Component } from 'react'




const App = () => {

  const [searchString, setSearchString] = useState('');//declaring Inital State for search field
  const [monsters,setMonsters] = useState([]);
  console.log('from app');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => setMonsters(monsters));
  }, [])
  
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
    <CardList monsters={monsters} />
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