import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTasksByCategory } from '../../redux/selectors'
import { changeTaskPosition, addTask, deleteTask, noteTextChange, nameChange, changeHeaderStatus } from '../../redux/actions'
import { Dashboard } from './Dashboard'
const mapStateToProps = (state) => {
  console.log(state);
  let { Header } = state.headerReducer
  let { task_list } = state.tasksReducer
  return {
    dashboard_list: getTasksByCategory(task_list, 'dashboard'),
    Header
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeTaskPosition,
      addTask,
      deleteTask,
      noteTextChange,
      nameChange,
      changeHeaderStatus
    },
    dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 

