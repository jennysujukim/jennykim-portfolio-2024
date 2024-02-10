//styles
import styles from './Icon.module.scss'

type IconProps = {
  iconType: string;
  svgFill?: string;
  contentFill?: string;
}

export default function Icon({ 
  iconType, 
  svgFill,
  contentFill }: IconProps) {

  return (
    <div className={styles.Wrapper}>
      {iconType === 'listIcon' &&
        <svg viewBox="0 0 353 353" fill={svgFill} xmlns="http://www.w3.org/2000/svg">
          <rect width="353" height="96" fill={contentFill} />
          <rect y="128" width="353" height="97" fill={contentFill} />
          <rect y="257" width="353" height="96" fill={contentFill} />
        </svg>
      }
      {iconType === 'gridIcon' &&
      <svg viewBox="0 0 353 354" fill={svgFill} xmlns="http://www.w3.org/2000/svg">
        <rect y="193" width="161" height="161" fill={contentFill} />
        <rect width="161" height="161" fill={contentFill} />
        <rect x="192" y="193" width="161" height="161" fill={contentFill} />
        <rect x="192" width="161" height="161" fill={contentFill} />
      </svg>
      }
    </div>
  )
}
