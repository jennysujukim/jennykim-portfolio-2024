import useResponsive from '../../hooks/useResponsive';
import { BreakpointType } from '../../types/enums/BreakpointType';
// styles
import styles from './StickyLayout.module.scss'

type StickyLayoutProps = {
  stickyContent: React.ReactNode;
  scrollContent: React.ReactNode;
  stickyContentSpacing: boolean;
  scrollContentSpacing: boolean;
}

export default function StickyLayout({ 
  stickyContent, 
  scrollContent,
  stickyContentSpacing,
  scrollContentSpacing }: StickyLayoutProps) {

  const isResponsive = useResponsive();

  return (
    <div className={styles.Wrapper}>
      <section className={stickyContentSpacing ? `Section ${styles.Sticky_Cont}` : 
        isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet ? styles.Sticky_Cont : 
        `Section ${styles.Sticky_Cont}`}
      >
        {stickyContent}
      </section>
      <section className={scrollContentSpacing ? `Section ${styles.Scroll_Cont}` : 
        isResponsive === BreakpointType.Mobile || isResponsive === BreakpointType.Tablet ? styles.Sticky_Cont : 
        `Section ${styles.Scroll_Cont}`}
      >
        {scrollContent}
      </section>
    </div>
  )
}
