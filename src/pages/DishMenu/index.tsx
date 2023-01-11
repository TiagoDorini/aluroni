import styles from "./DishMenu.module.scss"
import { ReactComponent as Logo } from "assets/logo.svg"
import SearchEngine from "./SearchEngine"
import { useState } from "react"
import Filters from "./Filters"
import Sorter from "./Sorter"

export interface IDishMenuProps {}

export default function DishMenu({}: IDishMenuProps) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<number | null>(null)

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>House of code and pasta</div>
      </header>
      <section className={styles.dishMenu}>
        <h3 className={styles.dishMenu__title}>Menu</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.dishMenu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Sorter />
        </div>
      </section>
    </main>
  )
}
