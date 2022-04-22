import './index.scss'

const AnimatedLetters = ({ltClass, strArray, idx}) => {
  return (
    <span>
      {
        strArray.map((e, i) => (
          e === ' '
          ? <span key={i + idx}>&nbsp;</span> 
          :
          <span key={e + i} className={`${ltClass} _${i + idx}`}>
            {e}
          </span>
        ))
      }
    </span>
  )

}

export default AnimatedLetters