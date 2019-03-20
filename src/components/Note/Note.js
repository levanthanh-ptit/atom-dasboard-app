import React, { Component } from 'react'
import './Note.scss'
export default class Note extends Component {
  state = {
    headerLock: true
  }
  handleHeaderLock(value) {
      this.props.CardDraggable(value);
    this.setState({
      headerLock: value
    })
  }
  textChange(e) {
    this.props.textChange(this.props.id, e.target.value);
  }
  nameChange(e) {
    this.props.noteNameChange(this.props.id, e.target.value);
  }
  render() {
    return (
      <div className='note-wraper'>
        <div className='note-header'
        >
          <input id={'note-header-text-' + this.props.id}
            className={'note-header-text' + (this.state.headerLock ? '' : ' editting')}
            type="text"
            value={this.props.headerText}
            onChange={(e) => this.nameChange(e)}
            onFocus={() => { this.handleHeaderLock(false)}}
            onBlur={() => this.handleHeaderLock(true)}
          />

        </div>
        <textarea className='note-content'
          onChange={(e) => this.textChange(e)}
          value={this.props.text} />
      </div>
    )
  }
}
