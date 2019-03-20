import React, { Component } from 'react'
import './AppHeader.scss'

export class AppHeader extends Component {
  handlerNavigatorOpenClick() {
    this.props.changeNavigatorStatus(!this.props.Navigator.status)
  }
  render() {
    var hidden = (this.props.Header.size === 'thin')

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
