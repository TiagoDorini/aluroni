import { useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'
import dishes from 'data/dishes.json'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { IDish } from 'types/DishTypes'
import Tags from 'components/Tags'

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
					</div>
					<div>
						<Tags
							category={selectedDish.category}
							price={selectedDish.price}
							serving={selectedDish.serving}
							size={selectedDish.size}
						/>
					</div>
				</section>
			)}
		</>
	)
}
