import { Route, Routes, useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'
import dishes from 'data/dishes.json'
import Tags from 'components/Tags'
import NotFound from 'pages/NotFound'
import Header from 'components/Header'

export default function Dish() {
	const { id } = useParams()
	const navigate = useNavigate()
	const selectedDish = dishes.find((item) => item.id === Number(id))

	if (!selectedDish) {
		return <NotFound />
	}

	return (
		<Routes>
			<Route path='*' element={<Header />}>
				<Route
					index
					element={
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
					}
				/>
			</Route>
		</Routes>
	)
}
