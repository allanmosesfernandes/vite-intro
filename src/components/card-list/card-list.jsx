import React, { Component } from 'react'
export class CardList extends Component {

  render() {
    const { monsters } = this.props;
    console.log(monsters)
    return (
      <div>
        {
            monsters.map((monster, index) => {
              return <h1 key={index}>{monster.name}</h1>
            })
        }
      </div>
    )
  }
}

export default CardList