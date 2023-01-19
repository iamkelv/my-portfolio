import React from 'react'
import img from '../assets/img/img.jpg'
import classes from './Home.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import Twitter from '@mui/icons-material/Twitter'
import MenuIcon from '@mui/icons-material/Menu'
import Instagram from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'
import NoteAlt from '@mui/icons-material/NoteAlt'

export const Home = () => {
  return (
    <div className={classes.container} id="home">
      <span className={classes.harmburger}>
        <MenuIcon />
      </span>
      <div className={classes.left}>
        <span className={classes.head}>
          <span>KELVIN</span>
        </span>
        <span className={classes.about}>
          <p>Hi, my name is Kelvin Moses - but call me Kelv. 😊.</p>{' '}
          <p>
            I’m a Frontend Engineer who loves implementing and converting
            designs to code solutions.{' '}
          </p>
          <p>
            {' '}
            My hobbies are hiking and cycling during my free time. I also enjoy
            public speaking and working with teams.
          </p>
          <p>
            Need pictures or my bio for a feature or speaker graphics? click{' '}
            <a href="#"> here.</a>
          </p>
        </span>
        <span className={classes.social}>
          <a target="_blank" href="https://twitter.com/iam_kelvinjnr">
            <span>
              <Twitter />
            </span>
          </a>
          <a target="_blank" href="">
            <span>
              <Instagram />
            </span>{' '}
            <span>
              <NoteAlt />
            </span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/iamkelv/">
            <span>
              <LinkedIn />
            </span>
          </a>
          <a target="_blank" href="http://github.com/iamkelv">
            <span>
              <GitHubIcon />
            </span>
          </a>
        </span>
      </div>
      <div className={classes.right}>
        <span>
          <img className={classes.profile_img} src={img} alt="" />
        </span>
      </div>
    </div>
  )
}
