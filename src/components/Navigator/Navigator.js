import React, { Component } from 'react'
import './Navigator.scss'
export default class Navigator extends Component {
  onDragOver = (ev) => {
    ev.preventDefault();
  }
  render() {
    var contents = this.props.nav_list.map(element => {
      return (
        <div key={element.id}
          id={element.id}
          className='menu-item'
          draggable
          onDragStart={(e) => { this.props.onDragStart(e, element.id) }}
        >
          {element.id} + {element.name}
        </div>
      )
    })
    return (
      <div className={'Navigator draggable' + (this.props.isEnable ? ' enable' : '')}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => { this.props.onDrop(e, 'navigator') }}>
        {contents}
      </div>
    )
  }
}
