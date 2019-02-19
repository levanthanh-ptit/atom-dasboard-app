import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTasksByCategory } from '../../redux/selectors'
import { changeTaskPosition } from '../../redux/actions'
import './Navigator.scss'
export class Navigator extends Component {
  state = {
    style: '',
    CardDraggable: true,
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
  render() {
    var contents = this.props.nav_list.map(element => {
      return (
        <div
          key={element.id}
          className='menu-item-container'
          onDragOver={(e) => { this.onDragOver(e) }}
          onDragLeave={() => { this.onDragLeave(); }}
        >
          <div
            className='add-item-space-wrapper'
            onDrop={(e) => { this.props.changeTaskPosition(e, 'navigator', element.id); this.onDragLeave(); }}
          >
            <div
              className={'add-item-space' + this.state.style}
            ></div>
          </div>
          <div
            className='menu-item'
            draggable={this.state.CardDraggable}
            onDragStart={(e) => { this.onDragStart(e, element.id) }}
            onDrop={(e) => { this.props.changeTaskPosition(e, 'navigator', element.id); this.onDragLeave(); }}
          >
            {element.id + ' ' + element.name}
          </div>
        </div>

      )
    })
    contents = <>
      {contents}
      <div
        className='menu-item-container'
        onDragOver={(e) => { this.onDragOver(e) }}
        onDragLeave={() => { this.onDragLeave(); }}
        onDrop={(e) => { this.props.changeTaskPosition(e, 'navigator', null); this.onDragLeave(); }}
        style={{
          height: '100%',
        }}
      >
        <div
          className='add-item-space-wrapper'
        >
          <div className={'add-item-space' + this.state.style}></div>
        </div>
      </div>
    </>

    return (
      <div className={'Navigator draggable' + (this.props.Navigator.status ? ' enable' : '')}
        onDragOver={(e) => this.onDragOver(e)}
        onDragLeave={() => { this.onDragLeave(); }}
      >
        {contents}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let { task_list } = state.tasksReducer
  let { Navigator } = state.navigatorReducer
  console.log(state);

  return {
    nav_list: getTasksByCategory(task_list, 'navigator'),
    Navigator
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeTaskPosition }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigator)