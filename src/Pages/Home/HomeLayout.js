import React, { Component } from 'react'
import './HomeLayout.scss'
export default class HomeLayout extends Component {
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
