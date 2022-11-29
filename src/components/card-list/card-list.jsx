import React from 'react'
import Card from '../card/card';

const CardList = (props) => {
  
  return (
    <div className='card-list'>
      <Card monsters={props}/>
    </div>
  )
}

export default CardList

  // render() {
  //   const { monsters } = this.props;
  //   return (
  //     <div className='card-list'>
        
  //       {
  //         monsters.map((monster, index) => {
  //           return <Card monster= {monster} index={index} />
  //             // return <div key={index}>
  //             //   <img 
  //             //     alt={`${monster.name} img`} 
  //             //     src={`https://robohash.org/${index}?set=set2`}/>

  //             //     <h1>{monster.name}</h1>
  //             //     <h4>{monster.email}</h4>
  //             // </div>
  //         })
  //       }
  //     </div>
  //   )