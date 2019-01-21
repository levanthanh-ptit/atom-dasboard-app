import React, { Component } from 'react'
import './Dashboard.scss'
export default class Dashboard extends Component {
  onDragOver = (ev) => {
    ev.preventDefault();
    this.onDragStyle();
  }
  state = {
    style: {}
  }
  onDragStyle() {
    this.setState({
      style: {
        borderWidth: '5px',
        borderColor: 'white',
        borderStyle: 'dashed'
      }
    })
  }
  onDropStyle(){
    this.setState({
      style: {
      }
    })
  }
  render() {
    var contents = this.props.dashboard_list.map(element => {
      return (
        <div key={element.id}
          id={element.id}
          className='content'
          draggable
          onDragStart={(e) => { this.props.onDragStart(e, element.id) }}
        >
          {element.id} + {element.name}
        </div>
      )
    })
    return (
      <div className='app-contents draggable'
        style={this.state.style}
        onDragOver={(e) => {this.onDragOver(e)} } 
        onDragLeave = {() =>{this.onDropStyle();}}
        onDrop={(e) => { this.props.onDrop(e, 'dashboard'); this.onDropStyle();}}>
        {contents}
      </div>
    )
  }
}
