// styles
import styles from './StickyLayout.module.scss'

type StickyLayoutProps = {
  stickyContent: React.ReactNode;
  scrollContent: React.ReactNode;
}

export default function StickyLayout({ 
  stickyContent, 
  scrollContent }: StickyLayoutProps) {

  return (
    <div className={styles.Wrapper}>
      <section className={`Section ${styles.Sticky_Cont}`}>
        {stickyContent}
      </section>
      <section className={`Section ${styles.Scroll_Cont}`}>
        {scrollContent}
      </section>
    </div>
  )
}
