import React, { Component } from 'react'

export const Card = ({monster}) => {
  return (
    <div key={monster.id}> 
      <img src={`https://robohash.org/${monster.id}/?set=set2`} />
      <h1>{monster.name}</h1>
      <p>
        {monster.email}
      </p>
    </div>
  )
}

export default Card