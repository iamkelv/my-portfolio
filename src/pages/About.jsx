import classes from './About.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BasicLinearProgress from '../components/BasicLinearProgress'

export const About = () => {
  return (
    <div className={classes.container} id="about">
      <div className={classes.top}>
        <span className={classes.name_title}>About Me </span>
        <span className={classes.intro}>
          <h2>Hi, I'm Kelvin </h2>
          <span></span>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.left}>
          <span className={classes.title_info}>
            <h1>Frontend Engineer with Passion</h1>
          </span>
          <span className={classes.self_intro}>
            <span>
              My name is Kelvin Moses. I fondly like to be called Kelv. I am a
              Software Engineer based in Lagos, Nigeria with Innovative and
              highly motivated engineer. Seeking to use proven skills in
              software development, technical writing and leadership to meet
              business needs.
            </span>
            <p>Below are some of the project I build</p>
          </span>
          <span className={classes.skill_wrapper}>
            <ul className={classes.skills}>
              <li>
                <span>
                  <CheckCircleIcon />
                </span>
                <span>
                  Building a scalable Open source Ecomerce Software as a Service
                  with grouped of friends. (Still in Beta Version)
                </span>
              </li>
              <li>
                <span>
                  <CheckCircleIcon />
                </span>
                <span>
                  Build a project management app to help project managers track
                  progress of a project.
                </span>
              </li>
              <li>
                <span>
                  <CheckCircleIcon />
                </span>
                <span>
                  Developed an application that help people to buy real estate
                  stock in Dubbia from verified Agents with buyout Api
                </span>
              </li>
              <li>
                <span>
                  <CheckCircleIcon />
                </span>
                <span>
                  Developed a Blog site that i used to publish my connect and
                  integrate with Hashnode
                </span>
              </li>
            </ul>
          </span>
        </div>
        <div className={classes.right}>
          <span>
            <span>
              In tech, I am a huge fan of great user experiences driven by web
              technology. I have used diiferent frontend tools, libries and
              frameworks to build scalable applications. some of this
              technologies are:
            </span>
            <span className={classes.skills_item}>
              <span className={classes.languages}>
                {' '}
                <h1>Languages</h1>
                <span>
                  <ul className={classes.right_skills}>
                    <li>
                      <span>HTML</span>
                      <span>
                        <BasicLinearProgress progress={100} />
                      </span>
                    </li>
                    <li>
                      <span>CSS</span>
                      <span>
                        <BasicLinearProgress progress={95} />
                      </span>
                    </li>
                    <li>
                      <span>JavaScript</span>
                      <span>
                        <BasicLinearProgress progress={90} />
                      </span>
                    </li>
                    <li>
                      <span>TypeScript</span>
                      <span>
                        <BasicLinearProgress progress={80} />
                      </span>
                    </li>
                  </ul>
                </span>
              </span>
              <span className={classes.frameworks}>
                {' '}
                <h1>Frameworks/Libs.</h1>
                <span>
                  <ul>
                    <li>
                      <span>React Js</span>
                      <span>
                        <BasicLinearProgress progress={100} />
                      </span>
                    </li>
                    <li>
                      <span>Next Js</span>
                      <span>
                        <BasicLinearProgress progress={80} />
                      </span>
                    </li>
                    <li>
                      <span>Vue Js</span>
                      <span>
                        <BasicLinearProgress progress={70} />
                      </span>
                    </li>
                    <li>
                      <span>Express Js</span>
                      <span>
                        <BasicLinearProgress progress={40} />
                      </span>
                    </li>
                  </ul>
                </span>
              </span>
              <span className={classes.tools}>
                {' '}
                <h1>Tools</h1>
                <span>
                  <ul>
                    <li>
                      <span>Axios</span>
                      <span>
                        <BasicLinearProgress progress={100} />
                      </span>
                    </li>
                    <li>
                      <span>Redux</span>
                      <span>
                        <BasicLinearProgress progress={100} />
                      </span>
                    </li>
                    <li>
                      <span>Material UI</span>
                      <span>
                        <BasicLinearProgress progress={98} />
                      </span>
                    </li>
                    <li>
                      <span>Styled Components</span>
                      <span>
                        <BasicLinearProgress progress={95} />
                      </span>
                    </li>
                  </ul>
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
