import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import classes from './Contact.module.css'
export const Contact = () => {
  return (
    <div className={classes.container} id="contact">
      <div className={classes.top}>
        <span className={classes.get_intouch}>Get In Touch</span>
        <span className={classes.contact_desc}>
          You can get in touch with me by sending me an email
        </span>
      </div>
      <div className={classes.buttom}>
        <div className={classes.left}>
          <span className={classes.body}>
            <span className={classes.title}>Email</span>
            <span className={classes.desc}>moseskelvin4u@gmail</span>
          </span>
          <span className={classes.body}>
            <span className={classes.title}>Phone</span>
            <span className={classes.desc}>+234 8060684357</span>
          </span>

          <span className={classes.link}>
            <a href="https://twitter.com/iam_kelvinjnr" target="_blank">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/in/iamkelv/" target="_blank">
              <LinkedIn />
            </a>
            <a href="https://github.com/iamkelv" target="_blank">
              <GitHub />
            </a>
          </span>
        </div>
        <div className={classes.form_container}>
          <form
            className={classes.form}
            action="https://formsubmit.co/moseskelvin4u@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="Porfolio Contact form!"
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for Contacting me. I will get back as soon as possible"
            />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/"
            ></input>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              className={classes.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={classes.email}
              required
            />
            <textarea
              cols="30"
              rows="10"
              name="message"
              placeholder="Message"
              required
              className={classes.message}
            />
            <span className={classes.submit_wrapper}>
              <button type="submit" className={classes.submitBtn}>
                Send
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}
