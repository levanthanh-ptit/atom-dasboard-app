import { CHANGE_CATEGORY } from '../actionTypes'
const initialState = {
  NavigatorIsEnable: false,
  HeaderHidden: false,
  task_list: []
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CATEGORY: {
      let task_list = state.task_list;
      let id = payload.id;
      let positionId = payload.positionId;    
      let dropToCategory = payload.dropToCategory;
      var index;
      var object;
      state.task_list.map(e => {
        if (e.id == id) {
          index = task_list.indexOf(e);
          object = e;
        }
        return true
      });
      task_list.splice(index, 1);
      object.category = dropToCategory;
      if (positionId == null) {
        task_list.push(object);
      }
      else {
        var arr = task_list;
        var i;
        arr.map(e => {
          if (e.id == positionId) {
            i = task_list.indexOf(e);
          }
          return true
        });
        task_list.splice(i, 0, object);
      }

      return {
        ...state,
        task_list: task_list
      }
    }


    default:
      return state
  }
}
