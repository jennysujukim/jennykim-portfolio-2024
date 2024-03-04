// components
import Highlight from '../../../components/atoms/Highlight'
import Tab from '../../../components/atoms/Tab'
// styles
import styles from './AboutScrollContent.module.scss'

export default function AboutScrollContent() {
  return ( 
    <>
      <section>
        <h2>Hi, There! I'm Jenny :)</h2>
        <div className={`Section ${styles.Text_Cont}`}>
          <p>
            I am a passionate <Highlight text="frontend developer & UIUX designer" /> with a strong emphasis on interactivity and user-centred design. I discovered my passion for technology during my time in the fashion industry as a digital marketer. I taught myself to code and design web products, continuously developing my skillsets to deliver <Highlight text="seamless interactive experience." />
          </p>
          <p>
            Currently, I work as a freelancer to help clients to build their digital existence in line with their business goal and objectives. I offer the design thinking and suggest the feasible solution to reach business’s requirement.
          </p>
        </div>
      </section>
      <section className={`Section ${styles.Text_Cont}`}>
        <h4 className="Section">Learn, Create, and Repeate.</h4>
        <div>
          <div>
            
          </div>
          <div>
            <p>
              At the same time, I am looking for the full-time opportunity to dedicate my skillset to the company where aligns with my future goal.
            </p>
            <p>
              I love everything that has to do with product design, web projects as well as digital marketing and animations. With my solid knowledge and proactive learning mindset towards digital products, I know how to help clients solve real business cases and grow their businesses by using design thinking. 
            </p>
          </div>
        </div>

      </section>
      <section className="Section">
        <div>
          <Tab 
            text="Work Experience"
            isActive={true}
            isTab
          />
          <div>
            <p>2023</p>
            <div>
              <p>Frontend Developer Intern</p>
              <p>@PhoneBox</p>
            </div>
          </div>
          <div>
            <p>2021</p>
            <div>
              <p>Assistant Online Merchandiser</p>
              <p>@The Handsome Corp.</p>
            </div>
          </div>
          <div>
            <p>2020 - 2021</p>
            <div>
              <p>Digital Marketing Consultant</p>
              <p>@X NIHILO Pty Ltd.</p>
            </div>
          </div>
        </div>

        <div>
          <Tab 
            text="Expertises & Skills"
            isActive={true}
            isTab
          />
          <div>
            <p>Frontend Development</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <p>Web Design</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <p>UIUX Design</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <p>Graphic Visual Design</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <p>Digital Marketing</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div>
          <Tab 
            text="Education"
            isActive={true}
            isTab
          />
          <div>
            <p>2022 - 2023</p>
            <div>
              <p>British Columbia Institute of Technology</p>
              <p>Diploma of New Media Design and Web Development</p>
            </div>
          </div>
          <div>
            <p>2018 - 2020</p>
            <div>
              <p>Royal Melbourne Institute of Technology</p>
              <p>Bachelor of Fashion (Merchandise Management)</p>
            </div>
          </div>
        </div>
      </section>
    </>  
  )
}
