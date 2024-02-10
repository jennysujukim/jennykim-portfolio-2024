//styles
import styles from './Icon.module.scss'

type IconProps = {
  iconType: string;
  svgFill?: string;
  contentFill?: string;
  width?: string;
  height?: string;
}

export default function Icon({ 
  iconType, 
  svgFill,
  contentFill,
  width,
  height }: IconProps) {

  return (
    <div className={styles.Wrapper} style={{ width: width, height: height }}>
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
      {iconType === 'arrowIcon' &&
      <svg viewBox="0 0 318 122" fill={svgFill} xmlns="http://www.w3.org/2000/svg">
        <line x1="8.74228e-08" y1="60" x2="316" y2="60" stroke={contentFill} stroke-width="5"/>
        <path d="M256 1L316 61L256 121" stroke={contentFill} stroke-width="5"/>
      </svg>
      }
    </div>
  )
}
