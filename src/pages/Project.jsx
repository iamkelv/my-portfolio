import React, { useEffect, useRef, useState } from 'react'
import classes from './Project.module.css'
import africommerce from '../assets/img/africommerce.png'
import fakeStore from '../assets/img/fakestore.png'
import estate from '../assets/img/estate.png'
const projects = [
  {
    id: 1,
    name: 'Africommerce',
    image: africommerce,

    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },

  {
    id: 2,
    name: 'Book Estate',
    image: estate,
    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },
  {
    id: 3,
    name: 'Fake Store',
    image: fakeStore,
    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },
  {
    id: 4,
    name: 'Africommerce',
    image: africommerce,
    tool: 'react',
    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },
  {
    id: 5,
    name: 'Africommerce',
    image: africommerce,
    tool: 'react',
    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },
  {
    id: 6,
    name: 'Fake Store',
    image: fakeStore,
    tool: 'react',
    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },
  {
    id: 7,
    name: 'Book Estate',
    image: estate,
    tool: 'react',
    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },
  {
    id: 8,
    name: 'Africommerce',
    image: africommerce,
    tool: 'react',
    tech: ['React', 'Redux', 'Styled-components', 'Material Ui'],
  },
]
const Project = () => {
  const [data, setData] = React.useState([...projects])
  const [project, setPrject] = useState(false)
  const getProject = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      console.log(entry.isIntersecting)
    })
    observer.observe(getProject.current)
  }, [])
  return (
    <div className={classes.container} id="projects" ref={getProject}>
      <div className={classes.body_top}>
        <h2 className={classes.project_head}>Projects</h2>
        <span>Here are some of the projects I worked on</span>
      </div>
      <div className={classes.body}>
        <span className={classes.body_switch}>
          <button
            onClick={(e) => {
              setData([...projects])
            }}
          >
            ALL
          </button>
          <button
            onClick={(e) => {
              setData((prev) => prev.filter((item) => item.tool === 'react'))
            }}
          >
            React Js
          </button>
          <button
            onClick={(e) => {
              setData((prev) => prev.filter((item) => item.tool === 'next'))
            }}
          >
            {' '}
            Next JS
          </button>
          <button
            onClick={(e) => {
              setData((prev) => prev.filter((item) => item.tool === 'vue'))
            }}
          >
            Vue Js
          </button>
        </span>
        <span className={classes.img_wrapper}>
          {data.map((item) => (
            <span
              className={classes.img_container}
              style={{ backgroundImage: `url(${item.image})` }}
              key={item.id}
            >
              <span className={classes.overlay}>
                <h1>{item.name}</h1>
              </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}

export default Project
