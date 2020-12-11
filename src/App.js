
import React from 'react'
import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends React.Component{

  constructor(){
    super()
    this.state ={

      monster: [],
      searchField:'',
    }
  }

  render(){
    return(
      <div>
        <h1>Monster's Rollodex</h1>
        <SearchBox/>
        <CardList/>
      </div>
    )
  }
}

export default App;
