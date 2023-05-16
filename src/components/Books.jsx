import React from 'react'
import { Link } from 'react-router-dom'

function Books() {
  return (

    <>
       <h1>Books</h1>
        <Link to="/books/1">Book 1</Link>
        <br />
        <Link to="/books/2">Book 2</Link>
        <br />
        <Link to="/books/new">New Book</Link>
    </>
 
  )
}

export default Books