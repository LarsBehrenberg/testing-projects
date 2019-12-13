import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to} style={{textShadow: `none`}}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/">
                <h3 style={{display: "inline", textShadow: "none"}}>My sweet site</h3>
            </Link>    
            <ul style={{listStyle: "none", float: "right"}}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/contact">Contact</ListLink>
            </ul>
        </header>
        
      {children}
    </div>
  )