// components
import Highlight from '../../../components/atoms/Highlight'
import List from '../../../components/molecules/List'
// styles
import styles from './AboutScrollContent.module.scss'

export default function AboutScrollContent() {

  const workExperienceListItems = [
    { listItemTitle: "Frontend Developer Intern", listItemSubtitle: "@PhoneBox", listItemYear: "2023" },
    { listItemTitle: "Assistant Online Merchandiser", listItemSubtitle: "@The Handsome Corp.",  listItemYear: "2021" },
    { listItemTitle: "Digital Marketing Consultant", listItemSubtitle: "@X NIHILO Pty Ltd", listItemYear: "2020 - 2021" }
  ]

  const expertisesAndSkillsListItems = [
    { listItemTitle: "Frontend Development", listItemSubtitle: "HTML, CSS" },
    { listItemTitle: "Web Design", listItemSubtitle: "HTML, CSS" },
    { listItemTitle: "UIUX Design", listItemSubtitle: "HTML, CSS" },
    { listItemTitle: "Graphic Visual Design", listItemSubtitle: "HTML, CSS" },
    { listItemTitle: "Digital Marketing", listItemSubtitle: "HTML, CSS" }
  ]

  const educationListItems = [
    { listItemTitle: "British Columbia Institute of Technology", listItemSubtitle: "Diploma of New Media Design and Web Development", listItemYear: "2022 - 2023" },
    { listItemTitle: "Royal Melbourne Institute of Technology", listItemSubtitle: "Bachelor of Fashion (Merchandise Management)", listItemYear: "2018 - 2020" }
  ]

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
        <List 
          tabText="Work Experience"
          listItems={workExperienceListItems}
        />
        <List 
          tabText="Expertises & Skills"
          listItems={expertisesAndSkillsListItems}
        />
        <List 
          tabText="Education"
          listItems={educationListItems}
        />
      </section>
    </>  
  )
}
