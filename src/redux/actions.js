import {
  CHANGE_CATEGORY,
  ADD_TASK,
  DELETE_TASK,
  NAME_CHANGE,
  NOTE_TEXT_CHANGE,
  CHANGE_TASK_POSITION,
  CHANGE_NAVIGATOR_STATUS,
  CHANGE_HEADER_STATUS
} from './actionTypes'
export const changeCategory = (id, positionId, dropToCategory) => ({
  type: CHANGE_CATEGORY,
  payload: {
    id,
    positionId,
    dropToCategory
  }
})
export const addTask = (id, name, category, type, contents) => ({
  type: ADD_TASK,
  payload: {
    id,
    name,
    category,
    type,
    contents
  }
})
export const nameChange = (id, text) => ({
  type: NAME_CHANGE,
  payload: {
    id,
    text
  }
})
export const noteTextChange = (id, text) => ({
  type: NOTE_TEXT_CHANGE,
  payload: {
    id, text  
  }
})
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: {
    id
  }
})
export const changeTaskPosition = (ev, dropToCategory, positionId) => ({
  type: CHANGE_TASK_POSITION,
  payload: {
    ev,
    dropToCategory,
    positionId
  }

})
export const changeNavigatorStatus = (status) => ({
  type: CHANGE_NAVIGATOR_STATUS,
  payload: {
    status
  }
})
export const changeHeaderStatus = (status) => ({
  type: CHANGE_HEADER_STATUS,
  payload: {
    status
  }
})
