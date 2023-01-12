import { useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'
import dishes from 'data/dishes.json'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { IDish } from 'types/DishTypes'

export default function Dish() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [selectedDish, setSelectedDish] = useState<IDish>()

	function getDish(dishId: string) {
		const dish = dishes.find((item) => item.id === Number(dishId))
		if (!dish) return null
		return dish
	}

	useEffect(() => {
		if (id) {
			const dish = getDish(id)
			if (dish) {
				setSelectedDish(dish)
			}
			if (!dish) {
				navigate('/notfound')
			}
		}
	}, [id])

	return (
		<>
			<button className={styles.return} onClick={() => navigate(-1)}>
				{'< Go Back'}
			</button>
			{selectedDish && (
				<section className={styles.container}>
					<h1 className={styles.title}>{selectedDish.title}</h1>
					<div className={styles.img}>
						<img src={selectedDish.photo} alt={selectedDish.title} />
					</div>
					<div className={styles.content}>
						<p className={styles.content__description}>{selectedDish.description}</p>
						<div className={styles.tags}>
							<div
								className={classNames({
									[styles.tags__type]: true,
									[styles[`tags__type__${selectedDish.category.label.toLowerCase()}`]]: true,
								})}
							>
								{selectedDish.category.label}
							</div>
							<div className={styles.tags__portion}>{selectedDish.size}g</div>
							<div className={styles.tags__qtypeople}>
								Serves {selectedDish.serving} {selectedDish.serving == 1 ? 'person' : 'people'}
							</div>
							<div className={styles.tags__cost}>R$ {selectedDish.price.toFixed(2)}</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
