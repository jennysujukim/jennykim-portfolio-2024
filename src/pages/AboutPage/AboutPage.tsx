// components
import StickyLayout from "../../layouts/StickyLayout"
import AboutStickyContent from "./AboutStickyContent"
import AboutScrollContent from "./AboutScrollContent"

export default function AboutPage() {
  return (
    <>
      <section className={`Section`}>
        <h2>About</h2>
      </section>
      <StickyLayout 
        stickyContent={<AboutStickyContent />}
        stickyContentSpacing={true}
        scrollContent={<AboutScrollContent />}
        scrollContentSpacing={true}
      />
    </>

  )
}
