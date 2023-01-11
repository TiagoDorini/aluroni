import dishes from 'data/dishes.json'
import styles from './Home.module.scss'

export default function Home() {
	let suggestedDishes = [...dishes]
	suggestedDishes = suggestedDishes.sort(() => 0.5 - Math.random()).splice(0, 3)

	return (
		<section>
			<h3 className={styles.title}>Suggestions</h3>

			<div className={styles.suggestions}>
				{suggestedDishes.map((item) => (
					<div key={item.id} className={styles.suggested}>
						<div className={styles.suggested__img}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.suggested__btn}> See more </button>
					</div>
				))}
			</div>
		</section>
	)
}
