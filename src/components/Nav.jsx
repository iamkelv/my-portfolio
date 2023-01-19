import React from 'react'
import classes from './Nav.module.css'
export const Nav = () => {
  return (
    <div className={classes.container}>
      <ul>
        <li className={classes.active}>
          {' '}
          <a href="#home">HOME</a>
        </li>
        <li>
          {' '}
          <a href="#about">ABOUT ME</a>
        </li>

        <li>
          {' '}
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          {' '}
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  )
}
