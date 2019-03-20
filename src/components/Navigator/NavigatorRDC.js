import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTasksByCategory } from '../../redux/selectors'
import { changeTaskPosition } from '../../redux/actions'
import { Navigator } from './Navigator'
const mapStateToProps = (state) => {
  let { task_list } = state.tasksReducer
  let { Navigator } = state.navigatorReducer
  console.log(state);

  return {
    nav_list: getTasksByCategory(task_list, 'navigator'),
    Navigator
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeTaskPosition }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigator)