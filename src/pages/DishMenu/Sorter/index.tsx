import styles from "./Sorter.module.scss"
import options from "./options.json"

export default function Sorter() {
  return (
    <button className={styles.sorter}>
      <span>Sort by</span>
      <div className={styles.sorter__options}>
        {options.map((item) => (
          <div className={styles.sorter__option} key={item.value}>
            {item.name}
          </div>
        ))}
      </div>
    </button>
  )
}
