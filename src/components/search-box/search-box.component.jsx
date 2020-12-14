import React from 'react'
import './search-box.style.css'

const SearchBox =(props)=>(
    <input
        className ='search-box'
        type='search'
        placeholder = 'search monster'
        onChange= {props.onSearchChange}
    />
)

export {SearchBox} 