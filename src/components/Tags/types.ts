import { IDish } from 'types/DishTypes'

export type ITag = Pick<IDish, 'category' | 'size' | 'serving' | 'price'>
