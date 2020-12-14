
import React from 'react'
import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css'

class App extends React.Component{

  constructor(){
    super()
    this.state ={

      monsters: [],
      searchField:'',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  
  }
  
  onSearchChange = (event) =>{
    //const {name,value} = event.target.value
    this.setState({searchField:event.target.value})
  }


  render(){
    //Object Destructuring
    const {monsters, searchField} = this.state
    
    //Filtering monster in response to search
    const filterMonster = monsters.filter(monster=>{
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
   
    return(
      <div className='App'>
        <h1>Monster's Rollodex</h1>
        <SearchBox onSearchChange ={this.onSearchChange}/>
        <CardList monster = {filterMonster}/>
      </div>
    )
  }
}

export default App;
