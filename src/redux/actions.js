import { CHANGE_CATEGORY } from './actionTypes'
export const changeCategory = (id, positionId, dropToCategory) => ({
  type: CHANGE_CATEGORY,
  payload: { id, positionId, dropToCategory }
})
