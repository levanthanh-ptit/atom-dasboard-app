import React, { Component } from 'react'
import './Dashboard.scss'
export default class Dashboard extends Component {
  state = {
    style: ''
  }
  onDragOver = (ev) => {
    ev.preventDefault();
    this.onDragStyle();
  }
  onDragStyle() {
    this.setState({
      style: ' highlight'
    })
  }
  onDragLeave() {
    this.setState({
      style: ''
    })
  }
  render() {
    var contents = this.props.dashboard_list.map(element => {
      return (
        <div
          key={element.id}
          className='content-outer'
          onDragOver={(e) => { this.onDragOver(e) }}
          onDragLeave={() => { this.onDragLeave(); }}
        >
          <div
            className={'add-space'+this.state.style}
            onDrop={(e) => { this.props.onDrop(e, 'dashboard', element.id); this.onDragLeave(); }}
          />
          <div
            id={element.id}
            className='content'
            draggable
            onDragStart={(e) => { this.props.onDragStart(e, element.id); }}
            onDrop={(e) => { this.props.onDrop(e, 'dashboard', element.id); this.onDragLeave(); }}
          >
            {"id: " + element.id + " name: " + element.name}
          </div>
        </div>
      )
    })
    return (
      <div className='app-contents'
        onDragOver={(e) => { this.onDragOver(e) }}
        onDragLeave={() => { this.onDragLeave(); }}
      >
        {contents}
      </div>
    )
  }
}
