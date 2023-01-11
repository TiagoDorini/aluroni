import styles from './DishMenu.module.scss'
import SearchEngine from './SearchEngine'
import { useState } from 'react'
import Filters from './Filters'
import Sorter from './Sorter'
import Itens from './Itens'
import theme from 'styles/Theme.module.scss'

export interface IDishMenuProps {}

export default function DishMenu({}: IDishMenuProps) {
	const [search, setSearch] = useState('')
	const [filter, setFilter] = useState<number | null>(null)
	const [sort, setSort] = useState('')

	return (
		<section className={styles.dishMenu}>
			<h3 className={theme.title}>Menu</h3>
			<SearchEngine search={search} setSearch={setSearch} />
			<div className={styles.dishMenu__filters}>
				<Filters filter={filter} setFilter={setFilter} />
				<Sorter sort={sort} setSort={setSort} />
			</div>
			<Itens search={search} filter={filter} sort={sort} />
		</section>
	)
}
