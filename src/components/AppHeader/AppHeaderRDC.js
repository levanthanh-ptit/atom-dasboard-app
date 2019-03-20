import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeNavigatorStatus } from '../../redux/actions'
import { AppHeader } from './AppHeader'
const mapStateToProps = (state) => {
    let { Header } = state.headerReducer;
    let { Navigator } = state.navigatorReducer;
    return {
        Header,
        Navigator
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ changeNavigatorStatus }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)