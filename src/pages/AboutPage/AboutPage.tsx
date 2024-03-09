// components
import StickyLayout from "../../layouts/StickyLayout"
import AboutStickyContent from "./AboutStickyContent"
import AboutScrollContent from "./AboutScrollContent"

export default function AboutPage() {
  return (
    <>
      <StickyLayout 
        stickyContent={<AboutStickyContent />}
        stickyContentSpacing={false}
        scrollContent={<AboutScrollContent />}
        scrollContentSpacing={true}
      />
    </>

  )
}
