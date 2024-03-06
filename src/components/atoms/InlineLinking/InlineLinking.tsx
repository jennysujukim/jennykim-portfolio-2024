import { useState, useRef } from "react";
import { Link } from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard";
// styles
import styles from './InlineLinking.module.scss'

type InlineLinkingProps = {
  href?: string;
  text: string;
  isTooltip?: boolean;
  TooltipText: string;
  isClipboard?: boolean;
}

export default function InlineLinking({ 
  href, 
  text, 
  isTooltip,
  TooltipText,
  isClipboard }: InlineLinkingProps) {

  const [ tooltipText, setTooltipText ] = useState<string>(TooltipText)
  const tooltip = useRef<HTMLDivElement>(null)

  const onCopyClipboard = () => {
    setTooltipText("Copied!")

    setTimeout(() => {
      setTooltipText(TooltipText)
    }, 2000)
  }

  return (
    <span className={styles.Wrapper}>
      {isTooltip ? (
      <>
        {isClipboard ? (
            <span ref={tooltip}>
              <CopyToClipboard 
                text="jennysujukim@gmail.com" 
                onCopy={() => onCopyClipboard()}
              >
                <button className={`P_Style ${styles.Clipboard_Cont}`}>
                  <span className={styles.Tooltip}>{tooltipText}</span>
                  <span className={styles.Container}>{text}</span>
                </button>
              </CopyToClipboard>
            </span>
        ) : (
          <>
            <span className={styles.Tooltip}>{tooltipText}</span>
            {href &&
              <Link 
                className={styles.Container} 
                to={href}
              >
                {text}
              </Link>
            }
          </>
        )}
      </>
      ) : (
        <>
          {href && 
            <Link 
              className={styles.Container} 
              to={href}
            >
              {text}
            </Link>
          }
        </>
      )}
    </span>
  )
}
