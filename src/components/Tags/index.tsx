import classNames from 'classnames'
import styles from './Tags.module.scss'
import { ITag } from './types'

interface ITagsProps extends ITag {}

export default function Tags({ category, price, serving, size }: ITagsProps) {
	return (
		<div className={styles.tags}>
			<div
				className={classNames({
					[styles.tags__type]: true,
					[styles[`tags__type__${category.label.toLowerCase()}`]]: true,
				})}
			>
				{category.label}
			</div>
			<div className={styles.tags__portion}>{size}g</div>
			<div className={styles.tags__qtypeople}>
				Serves {serving} {serving == 1 ? 'person' : 'people'}
			</div>
			<div className={styles.tags__cost}>R$ {price.toFixed(2)}</div>
		</div>
	)
}
