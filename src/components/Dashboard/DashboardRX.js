import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { }
const mapStateToProps = (state) => ({
    dashboard_list: state.task_list
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
