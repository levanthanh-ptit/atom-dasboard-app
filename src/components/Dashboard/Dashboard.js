import React, { Component } from 'react'
import './Dashboard.scss'
import Note from '../Note/Note'
export class Dashboard extends Component {
  state = {
    style: '',
    CardDraggable: true,
  }
  handleCardDraggable = (value) => {
    this.setState({
      CardDraggable: value
    })
  }
  HeaderHiddenHandle = (ev) => {
    let scrollTop = ev.target.scrollTop;
    if (ev.target.id === 'dashboard-main')
      this.props.changeHeaderStatus(scrollTop > 0 ? 'thin' : 'big')
  }
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
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
  cardRender = (id, type, name, contents) => {
    let card;
    if (type === 'note') {
      card = <Note id={id}
        headerText={name}
        text={contents}
        textChange={() => this.props.noteTextChange()}
        noteNameChange={() => this.props.nameChange()}
        CardDraggable={this.handleCardDraggable}
      />
    }
    return card
  }
  render() {
    var HeaderHidden = (this.props.Header.Hidden === 'thin')
    var contents;
    if (this.props.dashboard_list.length == 0) {
      contents = 0;
    }
    else {
      contents = this.props.dashboard_list.map(element => {
        return (
          <div
            key={element.id}
            className='card-container'
            onDragOver={(e) => { this.onDragOver(e) }}
            onDragLeave={() => { this.onDragLeave(); }}
          >
            <div
              className='add-card-space-wrapper'
              onDrop={(e) => { this.props.changeTaskPosition(e, 'dashboard', element.id); this.onDragLeave(); }}
            >
              <div className={'add-card-space' + this.state.style} />
            </div>
            <div
              id={element.id}
              className='card'
              draggable={this.state.CardDraggable}
              onDragStart={(e) => { this.onDragStart(e, element.id); }}
              onDrop={(e) => { this.props.changeTaskPosition(e, 'dashboard', element.id); this.onDragLeave(); }}
            >
              {this.cardRender(element.id, element.type, element.name, element.contents)}
            </div>
          </div>
        )
      })
      contents = <>
        {contents}
        <div
          className='card-container'
          onDragOver={(e) => { this.onDragOver(e) }}
          onDragLeave={() => { this.onDragLeave(); }}
        >
          <div
            className='add-card-space-wrapper'
            onDrop={(e) => { this.props.changeTaskPosition(e, 'dashboard', null); this.onDragLeave(); }}
          >
            <div className={'add-card-space' + this.state.style} />
          </div>
        </div>
      </>
    }

    return (
      <div className={'app-contents' + (HeaderHidden ? ' header-hiden' : '')}
        id='dashboard-main'
        onDragOver={(e) => { this.onDragOver(e) }}
        onDragLeave={() => { this.onDragLeave(); }}
        onScroll={(e) => this.HeaderHiddenHandle(e)}
        onDrop={(e) => { if (contents == 0) { this.props.changeTaskPosition(e, 'dashboard', null); this.onDragLeave(); } }}
      >
        {contents == 0 ? null : contents}
      </div>
    )
  }
}

