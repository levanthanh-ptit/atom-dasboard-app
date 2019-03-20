import {
  CHANGE_CATEGORY,
  ADD_TASK,
  DELETE_TASK,
  NOTE_TEXT_CHANGE,
  NAME_CHANGE,
  CHANGE_TASK_POSITION
} from '../actionTypes'
const initialState = {
  task_list: [
    {
      id: 0,
      name: "App note 0",
      category: 'dashboard',
      type: 'note',
      contents: 'sample text 0'
    },
    {
      id: 1,
      name: "App note 1",
      category: 'dashboard',
      type: 'note',
      contents: 'sample text 1'
    },
    {
      id: 2,
      name: "App note 2",
      category: 'dashboard',
      type: 'note',
      contents: 'sample text 2'
    },
    {
      id: 3,
      name: "App reminder 3",
      category: 'dashboard',
      type: 'reminder',
      contents: null
    },
    {
      id: 4,
      name: "App reminder 3",
      category: 'dashboard',
      type: 'reminder',
      contents: null
    },
    {
      id: 5,
      name: "App reminder 3",
      category: 'dashboard',
      type: 'reminder',
      contents: null
    },
    {
      id: 6,
      name: "App reminder 3",
      category: 'dashboard',
      type: 'reminder',
      contents: null
    },
    
  ]
}
const tasksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CATEGORY: {
      let { task_list } = state;
      let { id } = payload;
      let { positionId } = payload;
      let { dropToCategory } = payload;
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
    case ADD_TASK: {
      //parameter
      let { id } = payload;
      let { name } = payload;
      let { category } = payload;
      let { type } = payload;
      let { contents } = payload;
      //state
      let { task_list } = state;
      //process
      task_list.push({
        id: id,
        name: name,
        category: category,
        type: type,
        contents: contents
      })
      return {
        ...state,
        task_list: task_list
      }
    }
    case DELETE_TASK: {
      //parameter
      let { id } = payload;
      //state
      let { task_list } = state;
      //process
      task_list = task_list.filter(el => {
        return el.id != id
      })
      return {
        ...state,
        task_list: task_list
      }
    }
    case NOTE_TEXT_CHANGE: {
      let { task_list } = state;
      let { id } = payload;
      let { text } = payload;
      task_list.map(e => {
        if (e.id == id) {
          task_list[task_list.indexOf(e)].contents = text;
        }
        return true
      });
      return {
        ...state,
        task_list: task_list
      }
    }
    case NAME_CHANGE: {
      let { task_list } = state;
      let { id } = payload;
      let { text } = payload;
      task_list.map(e => {
        if (e.id == id) {
          task_list[task_list.indexOf(e)].name = text;
        }
        return true
      });
      return {
        ...state,
        task_list: task_list
      }
    }
    case CHANGE_TASK_POSITION: {
      //parameter
      let { ev } = payload;
      let { dropToCategory } = payload;
      let { positionId } = payload;
      //extract data
      let id = ev.dataTransfer.getData("id");
      let index;
      let object;
      if (id == positionId) return state; //same position -> not move
      //state
      let task_list = state.task_list;
      //process
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
        let arr = task_list;
        let i;
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
export default tasksReducer