import styles from './Button.module.scss';

function Button(props) {
  const {children, onClick, ...otherProps} = props
  function handleClick(e) {
    onClick(e)
    // some code
  }
  return (
    <button 
      className={styles.btn} 
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </button>
  )
}
export default Button