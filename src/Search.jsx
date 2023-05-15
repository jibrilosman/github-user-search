import React from 'react'
import './index.css'
import './darkTheme.css'
import Main from './Main'

const Search = (props) => {
    

 
  return (
    <>
    
        <form onSubmit={props.userName === "" ? undefined : props.handleSubmit}>
            <input type="text"  value={props.userName} onChange={props.handleChange}
             placeholder="Search for a user" />
            <button type="submit">Search</button>
        </form>
        <Main results={props.results} />
        
   </>   
  )
}

export default Search