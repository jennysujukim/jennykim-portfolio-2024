import styles from './Image.module.scss'

type ImgContainerProps = {
  src: string;
  alt: string;
  height: number;
  removeFlex?: boolean;
}

export default function Image({ 
  src, 
  alt, 
  height,
  removeFlex }: ImgContainerProps) {
    
  return (
    <div className={removeFlex ? '' : styles.Container}>
      <img 
        src={src} 
        alt={alt} 
        height={height}
      />
    </div>
  )
}
