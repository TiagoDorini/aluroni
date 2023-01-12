import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'
import { routes } from 'routes'

export default function Menu() {
	return (
		<nav className={styles.menu}>
			<Logo />
			<ul className={styles.menu__list}>
				{Object.values(routes).map(
					(route, index) =>
						route.menuItem && (
							<li key={index} className={styles.menu__link}>
								<Link to={route.path}> {route.label} </Link>
							</li>
						)
				)}
			</ul>
		</nav>
	)
}
