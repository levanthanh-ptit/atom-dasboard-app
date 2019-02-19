import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeNavigatorStatus } from '../../redux/actions'
import './AppHeader.scss'
export class AppHeader extends Component {
  handlerNavigatorOpenClick() {
    this.props.changeNavigatorStatus(!this.props.Navigator.status)
  }
  render() {
    var hidden = (this.props.Header.Hidden==='thin')
   
    return (
      <div className={'Header' + (hidden ? ' hidden' : '')}
      >
        <div className={'Header__NavButton'}
          onClick={() => this.handlerNavigatorOpenClick()}
        >
          {hidden ? <i className="fas fa-ellipsis-h"></i> : <i className="fas fa-bars"></i>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { Header } = state.headerReducer;
  let { Navigator} = state.navigatorReducer;
  return {
    Header,
    Navigator
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeNavigatorStatus }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)