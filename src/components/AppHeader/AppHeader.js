import React, { Component } from 'react'
import './AppHeader.scss'
export default class AppHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var hidden = this.props.hidden;
    return (
      <div className={'Header' + (hidden ? ' hidden' : '')}
      >
        <div className={'Header__NavButton'}
          onClick={() => this.props.handlerNavigatorOpenClick()}
        >
          {hidden ? <i className="fas fa-ellipsis-h"></i> : <i className="fas fa-bars"></i>}
        </div>
      </div>
    )
  }
}
