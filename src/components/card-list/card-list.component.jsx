import React from 'react'
import { Card } from '../card/card.component'
import './card-list.style.css'

export const CardList =(props)=>(
    <div className='card-list'>
     {
  props.monster.map(monsterObj =>(
    <Card  key = {monsterObj.id} monster={monsterObj}/>
  )
  )   
  }    
  </div>
)
// <Card/>
//key ={monsterObj.id}
