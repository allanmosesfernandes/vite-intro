import React, { Component } from 'react'
export class CardList extends Component {

  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {
          monsters.map((monster, index) => {
              return <div key={index}>
                <img 
                  alt={`${monster.name} img`} 
                  src={`https://robohash.org/${index}?set=set2`}/>

                  <h1>{monster.name}</h1>
                  <h4>{monster.email}</h4>
              </div>
          })
        }
      </div>
    )
  }
}

export default CardList