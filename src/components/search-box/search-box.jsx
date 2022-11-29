import React from 'react'

const SearchBox = (props) => {
  
  return (
    <input type='search'
    className={props.classname}
    placeholder={props.placeholder} 
    onChange={props.onchangeHandler}/>
  )
}

export default SearchBox