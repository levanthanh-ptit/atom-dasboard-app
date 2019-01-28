import React, { Component } from 'react';
import './App.css';
import Layout from './layout/AppLayout';
import Navigator from './components/Navigator/Navigator';
import AppHeader from './components/AppHeader/AppHeader';
import Dashboard from './components/Dashboard/Dashboard';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavigatorIsEnable: false,
      task_list: []
    };
    this.handlerNavigatorOpenClick = this.handlerNavigatorOpenClick.bind(this);
    // for (let i = 0; i < 4; i++) {
    //   this.state.task_list.push({ id: i, name: "App note " + i, category: 'navigator', type: 'note' });
    // }
    for (let i = 0; i < 5; i++) {
      this.state.task_list.push({ id: i, name: "App reminder " + i, category: 'dashboard', type: 'reminder' });
    }
  }
  changeOder(fromIndex, toIndex) {
    var arr = this.state.task_list;
    var el = arr[fromIndex];
    arr.slice(fromIndex, 1);
    arr.slice(toIndex, 0, el);
    return arr;
  }
  handlerNavigatorOpenClick() {
    this.setState(state => ({
      NavigatorIsEnable: !this.state.NavigatorIsEnable
    }))
  }
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }
  onDrop = (ev, dropToCategory, positionId) => {
    let id = ev.dataTransfer.getData("id");
    var index;
    var object;
    if(id == positionId) return;
    let task_list = this.state.task_list;
    this.state.task_list.map(e => {
      if (e.id == id) {
        index = task_list.indexOf(e);
        object = e;
      }
    });
    task_list.splice(index, 1);
    object.category = dropToCategory;
    if (positionId == null) {
      task_list.push(object);
    }
    else {
      var arr = task_list;
      var i;
      arr.map(e => {
        if (e.id == positionId) {
          i = task_list.indexOf(e);
        }
      });
      task_list.splice(i, 0, object);
    }
    this.setState({
      ...this.state,
      task_list: task_list
    })

  }
  render() {
    const propsNavigator = <Navigator
      isEnable={this.state.NavigatorIsEnable}
      nav_list={this.state.task_list.filter((value) => {
        if (value.category == 'navigator') { return true }
      })}
      onDrop={this.onDrop}
      onDragStart={this.onDragStart} />
    const propsAppHeader = <AppHeader
      handlerNavigatorOpenClick={this.handlerNavigatorOpenClick} />
    const propsDashboard = <Dashboard
      dashboard_list={this.state.task_list.filter((value) => {
        if (value.category == 'dashboard') { return true }
      })}
      onDrop={this.onDrop}
      onDragStart={this.onDragStart} />
    return (
      <div id='App'>
        <Layout Navigator={propsNavigator} AppHeader={propsAppHeader} Dashboard={propsDashboard} />
      </div>

    );
  }
}

export default App;
