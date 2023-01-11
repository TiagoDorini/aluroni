import styles from './About.module.scss'
import theme from 'styles/Theme.module.scss'
import casa from 'assets/about-us/casa.png'
import pasta1 from 'assets/about-us/massa1.png'
import pasta2 from 'assets/about-us/massa2.png'

const images = [pasta1, pasta2]

export default function About() {
	return (
		<section>
			<h3 className={theme.title}>About us</h3>

			<div className={styles.aboutUs}>
				<img src={casa} alt='House Aluroni' />
				<div className={styles.aboutUs__text}>
					<p>
						We at Aluroni offer you, our dear customers, the tastiest and most sophisticated Homemade Italian Pasta in São
						Paulo! We value the traditional ingredients of Italian cuisine, fresh and excellent quality, so your experience is
						even more intense!
					</p>
					<p>We also have a meat menu with several options according to your taste!</p>
					<p>
						Aluroni has a reserve of special wines to accompany the Italian pasta that harmonizes perfectly with your delivery,
						be it meat or pasta!
					</p>
				</div>
			</div>
			<div className={styles.images}>
				{images.map((img, index) => (
					<div key={index} className={styles.images__img}>
						<img src={img} alt='Pasta Image' />
					</div>
				))}
			</div>
		</section>
	)
}
