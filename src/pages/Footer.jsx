import React from 'react'
import classes from './Footer.module.css'
import { Divider } from '@mui/material'
export const Footer = () => {
  return (
    <div className={classes.container}>
      <span className={classes.wrapper}>
        <Divider style={{ background: 'gray' }} />
        <span>Copyright © 2022 iamkelv.</span>
      </span>
    </div>
  )
}
