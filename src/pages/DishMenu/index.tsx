import styles from "./DishMenu.module.scss"
import { ReactComponent as Logo } from "assets/logo.svg"
import SearchEngine from "./SearchEngine"
import { useState } from "react"

export interface IDishMenuProps {}

export default function DishMenu({}: IDishMenuProps) {
  const [search, setSearch] = useState("")

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
      </section>
    </main>
  )
}
