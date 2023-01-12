import dishes from 'data/dishes.json'
import Item from './Item'
import styles from './Itens.module.scss'
import { useEffect, useState } from 'react'
import { IDishesMenu } from 'types/DishTypes'

interface IItensProps {
	search: string
	filter: number | null
	sort: string
}

export default function Itens({ search, filter, sort }: IItensProps) {
	const [list, setList] = useState(dishes)

	function checkSearch(title: string) {
		const regex = new RegExp(search, 'i')
		return regex.test(title)
	}

	function checkFilter(categoryId: number) {
		if (filter) {
			return filter === categoryId
		}
		return true
	}

	function applySort(newList: IDishesMenu) {
		switch (sort) {
			case 'portion':
				return newList.sort((a, b) => (a.size > b.size ? 1 : -1))
			case 'qty_people':
				return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1))
			case 'cost':
				return newList.sort((a, b) => (a.price > b.price ? 1 : -1))
			default:
				return newList
		}
	}

	useEffect(() => {
		const newList = dishes.filter((item) => checkSearch(item.title) && checkFilter(item.category.id))
		setList(applySort(newList))
	}, [search, filter, sort])

	return (
		<div className={styles.itens}>
			{list.map((item) => (
				<Item key={item.id} {...item} />
			))}
		</div>
	)
}
