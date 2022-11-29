import React, { Component } from 'react'

export const Card = (props) => {
  const {monster, index} = this.props;
  console.log(monster);
  return (
    <div>card</div>
  )
}

// export class Card extends Component {
//   render() {
//     const {monster, index} = this.props;
//     console.log(this.props)
//     return (
//         <div key={monster.id}>
//             <img alt={`${monster.name} img`} src={`https://robohash.org/${index}?set=set2`}/>
//             <h1>{monster.name}</h1>
//             <h4>{monster.email}</h4>
//         </div>
//     )
//   }
// }

export default Card