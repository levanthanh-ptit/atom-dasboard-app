import React, { Component } from 'react'
import './AppLayout.scss'
import Navigator from '../components/Navigator/Navigator'
import AppHeader from '../components/AppHeader/AppHeader'
//import CardList from '../components/CardList/CardList'
import Dashboard from '../components/Dashboard/Dashboard'
export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavigatorIsEnable: false,
      nav_list: [],
      dashboard_list: [],
    };
    this.handlerNavigatorOpenClick = this.handlerNavigatorOpenClick.bind(this);
    for (let i = 0; i < 10; i++) {
      this.state.nav_list.push({ id: i, name: "Application " + i });
    }
  }
  handlerNavigatorOpenClick() {
    this.setState(state => ({
      NavigatorIsEnable: !this.state.NavigatorIsEnable
    }))
  }
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", ev.target.id);
  }
  onDrop = (ev, category) => {
    let id = ev.dataTransfer.getData("id");
    var nav_list = this.state.nav_list;
    var dashboard_list = this.state.dashboard_list;
    if (category === 'navigator') {
      let index;
      let name;
      dashboard_list.map(e => {
        if (e.id == id) {
          index = dashboard_list.indexOf(e);
          name = e.name;
        }
      })
      if (index != null) {
        dashboard_list.splice(index, 1);
        nav_list.push({ id: id, name: name })
      }
    }
    if (category === 'dashboard') {
      let index;
      let name;
      nav_list.map(e => {
        if (e.id == id) {
          index = nav_list.indexOf(e);
          name = e.name;
        }
      })
      if (index != null) {
        nav_list.splice(index, 1);
        dashboard_list.push({ id: id, name: name })
      }

    }
    this.setState({
      ...this.state,
      nav_list,
      dashboard_list
    })

  }
  render() {
    return (
      <div className='layout-container'>
        <Navigator isEnable={this.state.NavigatorIsEnable}
          nav_list={this.state.nav_list}
          onDrop={this.onDrop}
          onDragStart={this.onDragStart} />
        <div className={'wrap-container'}>
          <AppHeader handlerNavigatorOpenClick={this.handlerNavigatorOpenClick} />
          <Dashboard dashboard_list={this.state.dashboard_list}
            onDrop={this.onDrop}
            onDragStart={this.onDragStart} />
        </div>
      </div>
    )
  }
}
