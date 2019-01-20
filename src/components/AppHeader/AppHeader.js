import React, { Component } from 'react'
import './AppHeader.scss'
export default class AppHeader extends Component {
  constructor(props){
    super(props);
    this.handlerNavigatorOpenClick = props.handlerNavigatorOpenClick;
  }
  handlerNavigatorOpenClick;
  render() {
    return (
      <div className='Header'>
        <div className='Header__NavButton' onClick={this.props.handlerNavigatorOpenClick}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    )
  }
}
