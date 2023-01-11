import styles from './Header.module.scss'
import { Outlet } from 'react-router-dom'
import theme from 'styles/Theme.module.scss'

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>House of code and pasta</div>
			</header>
			<div className={theme.container}>
				<Outlet />
			</div>
		</>
	)
}
