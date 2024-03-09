// components
import Highlight from '../../../components/atoms/Highlight'
import List from '../../../components/molecules/List'
import Title from '../../../components/atoms/Title'
// styles
import styles from './AboutScrollContent.module.scss'


export default function AboutScrollContent() {

  const workExperienceListItems = [
    { listItemTitle: "Frontend Developer Intern", listItemSubtitle: "@PhoneBox", listItemYear: "2023" },
    { listItemTitle: "Assistant Online Merchandiser", listItemSubtitle: "@The Handsome Corp.",  listItemYear: "2021" },
    { listItemTitle: "Digital Marketing Consultant", listItemSubtitle: "@X NIHILO Pty Ltd", listItemYear: "2020 - 2021" }
  ]

  const expertisesAndSkillsListItems = [
    { listItemTitle: "Frontend Development", listItemKeywords: [ "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Redux", "WordPress", "Webflow", "SASS", "TailwindCSS", "Material UI", "Bootstrap", "REST API", "Headless CMS" ] },
    { listItemTitle: "Web Design", listItemKeywords: [ "Figma", "Adobe XD" ] },
    { listItemTitle: "UIUX Design", listItemKeywords: [ "HTML", "CSS" ] },
    { listItemTitle: "Graphic Visual Design", listItemKeywords: [ "Photoshop", "Illustrator", "InDesign", "After Effect", "Dimension", "Premier Pro", "Final Cut Pro" ] },
    { listItemTitle: "Digital Marketing", listItemKeywords: [ "Social Media Management", "Marketing Campaign", "Marketing Research",  ] }
  ]

  const educationListItems = [
    { listItemTitle: "British Columbia Institute of Technology", listItemSubtitle: "Diploma of New Media Design and Web Development", listItemYear: "2022 - 2023" },
    { listItemTitle: "Royal Melbourne Institute of Technology", listItemSubtitle: "Bachelor of Fashion (Merchandise Management)", listItemYear: "2018 - 2020" }
  ]

  return ( 
    <>
      <section>
        <Title 
          text="Hi there 👋 I'm Jenny :)"
          textCenter
        />
        <div className={`Section ${styles.Text_Cont}`}>
          <p>
            I am a passionate <Highlight text="frontend developer & UIUX designer" /> with a strong emphasis on interactivity and user-centred design. I discovered my passion for technology during my time in the fashion industry as a digital marketer. I taught myself to code and design web products, continuously developing my skillsets to deliver <Highlight text="seamless interactive experience." />
          </p>
          <p>
            Currently, I work as a freelancer to help clients to build their digital existence in line with their business goal and objectives. I offer the design thinking and suggest the feasible solution to reach business’s requirement. At the same time, I am looking for the full-time opportunity to dedicate my skillset to the company where aligns with my future goal.
          </p>
          <p>
            When I'm off, you can find me at the squash court or judo gym, training F45, and enjoying good cup of coffee. I am always open to new opportunities and challenges, so feel free to reach out to me!
          </p>
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
          isContainer
        />
        <List 
          tabText="Education"
          listItems={educationListItems}
        />
      </section>
    </>  
  )
}
