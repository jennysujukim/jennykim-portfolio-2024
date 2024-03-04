import useResponsive from "../../../hooks/useResponsive"
import { BreakpointType } from "../../../types/enums/BreakpointType"
// styles
import styles from './H3Heading.module.scss'

type H3HeadingProps = {
  text: string;
}

export default function H3Heading({ text }: H3HeadingProps) {

  const isResponsive = useResponsive()

  return (
    <div className={styles.Divider_Cont}>
      { isResponsive === BreakpointType.Mobile && <hr className="Line"></hr> }
      <h3>{text}</h3>
      { isResponsive !== BreakpointType.Mobile && <hr className="Line_Spacing"></hr> }
    </div>
  )
}
