import styles from './NotFound.module.scss'
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'
import classNames from 'classnames'
import theme from 'styles/Theme.module.scss'

export default function NotFound() {
	return (
		<div
			className={classNames({
				[styles.container]: true,
				[theme.container]: true,
			})}
		>
			<NotFoundImage />
		</div>
	)
}
