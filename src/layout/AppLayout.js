import React, { Component } from 'react'
import './AppLayout.scss'
export default class AppLayout extends Component {
  render() {
    return (
      <div className='layout-container'>
        {this.props.Navigator}
        <div className={'wrap-container'}>
          {this.props.AppHeader}
          {this.props.Dashboard}
        </div>
      </div>
    )
  }
}
