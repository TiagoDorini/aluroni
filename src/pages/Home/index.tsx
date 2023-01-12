import dishes from 'data/dishes.json'
import styles from './Home.module.scss'
import theme from 'styles/Theme.module.scss'
import aboutUs from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
	let suggestedDishes = [...dishes]
	suggestedDishes = suggestedDishes.sort(() => 0.5 - Math.random()).splice(0, 3)

	const navigate = useNavigate()

	function redirectToDetails(dish: (typeof dishes)[0]) {
		navigate(`/dish/${dish.id}`, { state: { dish } })
	}

	return (
		<section>
			<h3 className={theme.title}>Suggestions</h3>
			<div className={styles.suggestions}>
				{suggestedDishes.map((item) => (
					<div key={item.id} className={styles.suggested}>
						<div className={styles.suggested__img}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button onClick={() => redirectToDetails(item)} className={styles.suggested__btn}>
							See more
						</button>
					</div>
				))}
			</div>
			<h3 className={theme.title}> Our Place </h3>
			<div className={styles.ourPlace}>
				<img src={aboutUs} alt='Casa do aluroni' />
				<div className={styles.ourPlace__address}>
					Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	)
}
