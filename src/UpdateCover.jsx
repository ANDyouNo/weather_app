import styles from './UpdateCover.module.css'

function UpdateCover(props) {
  return (
    <div className={styles.background}>
      <div onClick={props.updatePressed} className={styles.img}></div>
    </div>
  )
}

export default UpdateCover