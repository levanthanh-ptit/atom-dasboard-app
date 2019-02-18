import React, { Component } from 'react';
import Layout from './HomeLayout';
import Navigator from '../../components/Navigator/Navigator';
import AppHeader from '../../components/AppHeader/AppHeader';
import Dashboard from '../../components/Dashboard/Dashboard';
import { changeCategory } from '../../redux/actions'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavigatorIsEnable: false,
      HeaderHidden: false,
      task_list: []
    };
    this.handlerNavigatorOpenClick = this.handlerNavigatorOpenClick.bind(this);
    for (let i = 0; i < 4; i++) {
      this.state.task_list.push({ id: i, name: "App note " + i, category: 'dashboard', type: 'note', contents: 'sample text ' + i });
    }
    for (let i = 4; i < 10; i++) {
      this.state.task_list.push({ id: i, name: "App reminder " + i, category: 'navigator', type: 'reminder', contents: null });
    }
  }

  changeOder(fromIndex, toIndex) {
    var arr = this.state.task_list;
    var el = arr[fromIndex];
    arr.slice(fromIndex, 1);
    arr.slice(toIndex, 0, el);
    dispatch(changeCategory())
    return arr;
  }
  noteTextChange = (id, text) => {
    let task_list = this.state.task_list;
    this.state.task_list.map(e => {
      if (e.id == id) {
        task_list[task_list.indexOf(e)].contents = text;
      }
      return true
    });
    this.setState({
      task_list: task_list
    })
  }
  nameChange = (id, text) => {
    let task_list = this.state.task_list;
    this.state.task_list.map(e => {
      if (e.id == id) {
        task_list[task_list.indexOf(e)].name = text;
      }
      return true
    });
    this.setState({
      task_list: task_list
    })
  }
  handlerNavigatorOpenClick() {
    this.setState({
      NavigatorIsEnable: !this.state.NavigatorIsEnable
    })
  }
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }
  onDrop = (ev, dropToCategory, positionId) => {
    let id = ev.dataTransfer.getData("id");
    var index;
    var object;
    if (id == positionId) return;
    let task_list = this.state.task_list;
    this.state.task_list.map(e => {
      if (e.id == id) {
        index = task_list.indexOf(e);
        object = e;
      }
      return true
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
        return true
      });
      task_list.splice(i, 0, object);
    }
    this.setState({
      ...this.state,
      task_list: task_list
    })
  }
  HeaderHiddenHandle = (ev) => {
    let scrollTop = ev.target.scrollTop;
    if (!(ev.target.id === 'dashboard-main')) return
    this.setState({
      HeaderHidden: scrollTop > 0
    })
  }
  render() {
    const propsNavigator = <Navigator
      isEnable={this.state.NavigatorIsEnable}
      nav_list={this.state.task_list.filter((value) => {
        if (value.category == 'navigator') { return true }
        return false
      })}
      onDrop={this.onDrop}
      onDragStart={this.onDragStart}
    />
    const propsAppHeader = <AppHeader
      handlerNavigatorOpenClick={this.handlerNavigatorOpenClick}
      hidden={this.state.HeaderHidden}
    />
    const propsDashboard = <Dashboard
      dashboard_list={this.state.task_list.filter((value) => {
        if (value.category == 'dashboard') { return true }
        return false
      })}
      onDrop={this.onDrop}
      onDragStart={this.onDragStart}
      HeaderHidden={this.state.HeaderHidden}
      HeaderHiddenHandle={this.HeaderHiddenHandle}
      noteTextChange={this.noteTextChange}
      nameChange={this.nameChange}
    />
    return (
      <div id='App'>
        <Layout Navigator={propsNavigator} AppHeader={propsAppHeader} Dashboard={propsDashboard} />
      </div>

    );
  }
}

export default Home;
