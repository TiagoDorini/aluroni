import styles from "./Sorter.module.scss"
import options from "./options.json"
import { useState } from "react"
import classNames from "classnames"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

interface ISorterProps {
  sort: string
  setSort: React.Dispatch<React.SetStateAction<string>>
}

export default function Sorter({ sort, setSort }: ISorterProps) {
  const [open, setOpen] = useState(false)
  const sortName = sort && options.find((item) => item.value === sort)?.name

  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles["sorter--active"]]: !!sort,
      })}
      onClick={() => setOpen((prevValue) => !prevValue)}
      onBlur={() => setOpen(false)}
    >
      <span>{sortName || "Sort by"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sorter__options]: true,
          [styles["sorter__options--active"]]: open,
        })}
      >
        {options.map((item) => (
          <div
            className={styles.sorter__option}
            key={item.value}
            onClick={() => setSort(item.value)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </button>
  )
}
