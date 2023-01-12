import styles from './Item.module.scss'
import classNames from 'classnames'
import { IDish } from 'types/DishTypes'
import Tags from 'components/Tags'

interface IItemProps extends IDish {}

export default function Item({ title, description, photo, category, price, serving, size }: IItemProps) {
	return (
		<div className={styles.item}>
			<div className={styles.item__image}>
				<img src={photo} alt={title} />
			</div>
			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<Tags category={category} price={price} serving={serving} size={size} />
			</div>
		</div>
	)
}
