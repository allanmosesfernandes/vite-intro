import React, { Component } from 'react'

export class SearchBox extends Component {
  render() {
    const {placeholder,classname,onChangeHandler} = this.props;
    return (
      <input 
          type='search' 
          placeholder={placeholder}
          onChange={onChangeHandler} 
          className={`search-box ${classname}`}/>

    )
  }
}

export default SearchBox