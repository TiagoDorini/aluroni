import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

export default function Menu() {
	const routes = [
		{
			label: 'Home',
			to: '/',
		},
		{
			label: 'Menu',
			to: '/dishes',
		},
		{
			label: 'About us',
			to: '/about',
		},
	]

	return (
		<nav className={styles.menu}>
			<Logo />
			<ul className={styles.menu__list}>
				{routes.map((route, index) => (
					<li key={index} className={styles.menu__link}>
						<Link to={route.to}> {route.label} </Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
